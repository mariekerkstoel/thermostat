require_relative 'app/app'
Rack::Handler.default.run(App, :Port => 5000)
