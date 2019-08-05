
RELEASES_DIR = __dir__ + '/../../fullcalendar-releases'
DEFAULT_RELEASE = { 'version' => '0.0.0', 'date' => '1970-01-01' }

class SiteDataDynamic < Jekyll::Generator

  def generate(site)

    # if we are in production, we need the fully formed production URL for the json feeds
    # because the codepen links need absolute URLs. Also, if someone is building the static
    # repo locally without the full fullcalendar.io webapp, have them reference the feeds
    # in a cross-origin manner.
    site.data['demo_feed_baseurl'] =
      if ENV['JEKYLL_ENV'] === 'production' or not has_local_feeds(site)
        site.config['production_baseurl']
      else
        site.config['baseurl']
      end

  end

end

# use the existence of the releases dir as a proxy value for whether
# dynamic JSON feeds are locally available
def has_local_feeds(site)
  File.directory?(RELEASES_DIR)
end
