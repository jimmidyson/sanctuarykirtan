module Sanctuarykirtan
  class App < Padrino::Application
    register Padrino::Rendering
    register Padrino::Mailer
    register Padrino::Helpers
    register CompassInitializer

    enable :sessions

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

    get :kirtan, :with => :short_url do
      @video = Video.first(:short_url => params[:short_url])
      if !@video
        not_found
      else
        @title = @video.name
        render 'kirtan'
      end
    end

  end
end
