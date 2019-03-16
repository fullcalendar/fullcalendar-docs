
QUERY_PACKAGE_RELEASE = __dir__ + '/../../bin/query-package-release'
$can_query_package_release = File.exist?(QUERY_PACKAGE_RELEASE)
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
        url = release['baseUrl'] + '/main.min.js'
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
        if release['hasCss']
          url = release['baseUrl'] + '/main.min.css'
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
        release['baseUrl']
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
  if $can_query_package_release
    json = `#{QUERY_PACKAGE_RELEASE} #{arg_str}`

    if json
      JSON.parse(json)
    end
  else
    fabricate_package_release(arg_str)
  end
end

def fabricate_package_release(arg_str)
  parts = arg_str.split(' ')
  package_name = parts[0]
  semver = parts[1]
  {
    'name' => package_name,
    'version' => semver,
    'baseUrl' => "https://unpkg.com/@fullcalendar/#{package_name}@#{semver}",
    'hasCss' => true
  }
end
