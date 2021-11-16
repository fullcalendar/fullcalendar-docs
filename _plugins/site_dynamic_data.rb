
class SiteDataDynamic < Jekyll::Generator

  def generate(site)
    site.data['parent_baseurl'] =
      if File.directory?(__dir__ + '/../../api')
        site.config['local_parent_baseurl']
      else
        site.config['live_parent_baseurl']
      end
  end

end
