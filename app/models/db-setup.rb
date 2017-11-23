require 'data_mapper'
require 'dm-postgres-adapter'

require_relative 'city'
require_relative 'user'

DataMapper.setup("postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
DataMapper.finalize
DataMapper.auto_upgrade!
