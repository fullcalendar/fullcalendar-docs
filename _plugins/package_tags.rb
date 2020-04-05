
$cache = {}

module Jekyll

  class PackageJsTag < Liquid::Tag

    def initialize(tag_name, input, context)
      super
      @input = input
    end

    def render(context)
      rendered_input = Liquid::Template.parse(@input).render(context).strip
      release = get_package_release(rendered_input)

      if release
        url = release['base_url'] + '/main.js'
        "<script src='#{url}'></script>"
      else
        puts "Could not identify release by '#{rendered_input}'"
        ''
      end
    end
  end

  class PackageCssTag < Liquid::Tag

    def initialize(tag_name, input, context)
      super
      @input = input
    end

    def render(context)
      rendered_input = Liquid::Template.parse(@input).render(context).strip
      release = get_package_release(rendered_input)

      if release
        if release['has_css']
          url = release['base_url'] + '/main.css'
          "<link href='#{url}' rel='stylesheet' />"
        else
          ''
        end
      else
        puts "Could not identify release by '#{rendered_input}'"
        ''
      end
    end
  end

  class PackageBaseUrl < Liquid::Tag

    def initialize(tag_name, input, context)
      super
      @input = input
    end

    def render(context)
      rendered_input = Liquid::Template.parse(@input).render(context).strip
      release = get_package_release(rendered_input)

      if release
        release['base_url']
      else
        puts "Could not identify release by '#{rendered_input}'"
        ''
      end
    end
  end

end

Liquid::Template.register_tag('package_js_tag', Jekyll::PackageJsTag)
Liquid::Template.register_tag('package_css_tag', Jekyll::PackageCssTag)
Liquid::Template.register_tag('package_baseurl', Jekyll::PackageBaseUrl)

def get_package_release(arg_str)
  if not $cache[arg_str]
    $cache[arg_str] = query_package_release(arg_str)
  else
    # puts "Using '#{arg_str}' from cache"
  end

  $cache[arg_str]
end

def query_package_release(arg_str)
  parts = arg_str.split(' ')
  package_name = parts[0]
  major_version = parts[1]

  dir = "assets/v#{major_version}/node_modules/#{package_name}"
  json_str = File.read("#{dir}/package.json")
  json_data = JSON.parse(json_str)
  version = json_data['version']
  has_css = File.exist?("#{dir}/main.css")
  base_url =
    if ENV['JEKYLL_ENV'] === 'production'
    then "https://unpkg.com/#{package_name}@#{version}"
    else "/#{dir}" # TODO: use site.baseurl
    end

  {
    'name' => package_name,
    'version' => version,
    'base_url' => base_url,
    'has_css' => has_css
  }
end
