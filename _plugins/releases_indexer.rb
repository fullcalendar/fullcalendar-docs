require 'json'

class ReleasesIndexer < Jekyll::Generator

  # Populates site.releases with fullcalendar/fullcalendar-scheduler releases.
  # If the releases_dir exists, assume that the releases can be accessed from the local installation.
  # Otherwise, populate site.releases with shim data and rely on production_baseurl.
  def generate(site)
    site.data['releases'] = {
      'fullcalendar' =>
        query_release(site, 'fullcalendar', [
          # fallback data
          { 'version' => '3-latest' },
          { 'version' => '2-latest' },
          { 'version' => '1-latest' }
        ]),
      'fullcalendar-scheduler' =>
        query_release(site, 'fullcalendar-scheduler', [
          # fallback data
          { 'version' => '1-latest', 'needsCore' => '3-latest' }
        ])
    }

    # hack
    site.data['fullcalendar_v4_latest'] = '/releases/fullcalendar/4.0.0-beta.1/fullcalendar-packages'
    site.data['fullcalendar_scheduler_v4_latest'] = '/releases/fullcalendar-scheduler/4.0.0-beta.1/fullcalendar-packages'
  end

end

def query_release(site, project_name, fallback_data)
  json_file = site.config['releases_dir'] + '/' + project_name + '/releases.json'

  if File.exists?(json_file)
    releases = JSON.parse(File.read(json_file))

    for release in releases
      release['baseurl'] =
        '/releases/' + project_name + '/' + release['version']
    end

  else
    releases = fallback_data

    for release in releases
      release['baseurl'] =
        site.config['production_baseurl'] +
        '/releases/' + project_name + '/' + release['version']
    end
  end

  releases
end
