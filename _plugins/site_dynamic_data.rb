
class SiteDataDynamic < Jekyll::Generator

  def generate(site)
    site.data['site_url'] =
      if ENV.has_key?('SITE_URL')
        ENV['SITE_URL']
      else
        site.config['fullcalendar_site']
      end
  end

end
