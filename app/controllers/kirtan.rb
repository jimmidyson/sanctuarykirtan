Sanctuarykirtan::App.controllers :kirtan do

  get :index do
    'Hello world!'
  end

  get :show, :map => "/kirtan/:short_url" do
    @video = Video.first(:short_url => params[:short_url])
    if !@video
      not_found
    else
      @title = @video.name
      render 'kirtan'
    end
  end

end
