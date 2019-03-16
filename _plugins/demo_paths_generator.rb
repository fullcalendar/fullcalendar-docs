# TODO: rename file

RELEASES_DIR = __dir__ + '/../../fullcalendar-releases'
DEFAULT_RELEASE = { 'version' => '0.0.0', 'date' => '1970-01-01' }

class DemoPathsGenerator < Jekyll::Generator

  def generate(site)

    site.data['demo_feed_baseurl'] =
      if ENV['JEKYLL_ENV'] === 'production' or not has_local_feeds(site)
        site.config['production_baseurl']
      else
        site.config['baseurl']
      end

    site.data['fullcalendar_latest'] = getPackageLatest('fullcalendar')
    site.data['fullcalendar_scheduler_latest'] = getPackageLatest('fullcalendar-scheduler')

  end

end

def getPackageLatest(package_name)
  json_file = "#{RELEASES_DIR}/#{package_name}.json"

  if File.exist?(json_file)
    JSON.parse(
      File.read(json_file)
    )[0]
  else
    DEFAULT_RELEASE
  end
end

# use the existence of the releases dir as a proxy value for whether
# dynamic JSON feeds are locally available
def has_local_feeds(site)
  File.directory?(RELEASES_DIR)
end
