require 'sinatra/base'

require_relative 'models/db-setup'
# require_relative 'models/city'
# require_relative 'models/user'

class App < Sinatra::Base
  get '/' do
    erb(:index)
  end
end
