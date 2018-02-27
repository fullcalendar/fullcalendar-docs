
class DemoPathsGenerator < Jekyll::Generator

  # Determines the base url for where dynamic JSON feeds are accessed.
  def generate(site)
    site.data['demo_feed_baseurl'] =
      if ENV['JEKYLL_ENV'] === 'production' or not has_local_feeds(site)
        site.config['production_baseurl']
      else
        '' # probably doing development with the fullcalendar-site repo
      end
  end

end

# use the existence of the releases_dir as a proxy value for whether
# dynamic JSON feeds are locally available
def has_local_feeds(site)
  File.directory?(
    site.config['releases_dir']
  )
end
