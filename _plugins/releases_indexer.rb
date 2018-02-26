require 'json'

# Populates site.releases with fullcalendar/fullcalendar-scheduler releases.
# If the releases_dir exists, assume that the releases can be accessed
# from a locally-running webserver via releases_own_baseurl.
# Otherwise, populate site.releases with shim data and rely on releases_external_baseurl.
class ReleasesIndexer < Jekyll::Generator

  def generate(site)
    releases_dir = site.config['releases_dir']
    releases_hash = {}

    if File.directory?(releases_dir)
      releases_hash['fullcalendar'] = process_releases(
        'fullcalendar',
        JSON.parse(
          File.read(releases_dir + '/fullcalendar/releases.json')
        ),
        site.config['releases_own_baseurl']
      )
      releases_hash['fullcalendar-scheduler'] = process_releases(
        'fullcalendar-scheduler',
        JSON.parse(
          File.read(releases_dir + '/fullcalendar-scheduler/releases.json')
        ),
        site.config['releases_own_baseurl']
      )
    else
      releases_hash['fullcalendar'] = process_releases(
        'fullcalendar',
        [
          { 'version' => '3-latest' },
          { 'version' => '2-latest' },
          { 'version' => '1-latest' },
        ],
        site.config['releases_external_baseurl']
      )
      releases_hash['fullcalendar-scheduler'] = process_releases(
        'fullcalendar-scheduler',
        [
          { 'version' => '1-latest', 'needsCore' => '3-latest' }
        ],
        site.config['releases_external_baseurl']
      )
    end

    site.data['releases'] = releases_hash
  end

end


# adds a 'baseurl'
def process_releases(release_name, versions, baseurl)
  for version in versions
    version['baseurl'] = baseurl + '/' + release_name + '/' + version['version']
  end

  versions
end
