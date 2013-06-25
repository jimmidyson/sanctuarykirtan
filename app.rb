require 'sinatra/base'

class App < Sinatra::Base
  configure do
    enable :logging 
    set :public_folder, ENV['RACK_ENV'] == 'production' ? 'frontend/dist' : 'frontend/app' # .tmp -> compiled app/
  end

  get '/api' do
    send_file File.join(settings.public_folder, 'index.html')
  end

  run! if app_file == $0
end
