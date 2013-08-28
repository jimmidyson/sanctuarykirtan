require 'sinatra/assetpack'

module Sanctuarykirtan
  class App < Padrino::Application
    register Padrino::Rendering
    register Padrino::Mailer
    register Padrino::Helpers
    register Sinatra::AssetPack
    register Padrino::Admin::AccessControl
    register Padrino::Cache

    enable :caching

    use OmniAuth::Builder do
      provider :facebook, ENV['OMNIAUTH_FACEBOOK_KEY'], ENV['OMNIAUTH_FACEBOOK_SECRET'],
        {
          :scope => 'email',
          :display => 'popup'
        }
    end

    Less.paths << File.join(root, 'css') << File.join(root, 'css/bootstrap')

    assets {
      serve '/js',     from: 'js'        # Default
      serve '/css',    from: 'css'       # Default
      serve '/images', from: 'images'    # Default

      prebuild true

      js_compression  :uglify
      css_compression :sass

      css :sk, '/css/sk.css', [
        '/css/application.css'
      ]

      js :sk, '/js/sk.js', [
        '/js/bootstrap.min.js'
      ]
    }

    before do
      @latestvideos = Video.all(:order => :created_on, :limit => 6)
    end

    error 404 do
      @title = 'Not found'
      render '404'
    end

    error 500 do
      @title = 'Oh dear, an error'
      render '500'
    end

    get :index do
      @title = 'Welcome'
      render 'home'
    end

  end
end
