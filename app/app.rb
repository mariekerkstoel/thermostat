ENV['RACK_ENV'] = 'development'

require 'sinatra/base'

require_relative 'models/db-setup'
# require_relative 'models/city'
# require_relative 'models/user'

class App < Sinatra::Base
  enable :sessions

  helpers do
    def current_user
      User.first(session[:user_id])
    end
  end

  get '/' do
    unless session[:user_id]
      user = User.create(temp: 20, city: City.first_or_create(name: 'Madrid'))
      session[:user_id] = user.id
    end
    erb(:index)
  end

  get '/user' do
    content_type :json
    "{\"temp\":#{current_user.temp},\"city\":\"#{current_user.city.name}\"}"
  end

  post '/temperature' do
    current_user.temp = params[:temp].to_i
    current_user.save
    status_code(204)
  end

  post '/city' do
    current_user.city = City.first_or_create(name: params[:city])
    current_user.save
    status_code(204)
  end
end
