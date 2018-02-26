# Monkeypatch to make the :slug token for the permalink string PRESERVE
# case-sensitivity.
#
# original:
# https://github.com/jekyll/jekyll/blob/v3.6.0/lib/jekyll/drops/url_drop.rb

module Jekyll
  module Drops

    class UrlDrop
      def slug
        Utils.slugify(@obj.data["slug"], :mode => "default", :cased => true) ||
          Utils.slugify(@obj.basename_without_ext)
      end
    end

  end
end
