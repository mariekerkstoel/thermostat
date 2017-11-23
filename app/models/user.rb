require 'data_mapper'

class User
  include DataMapper::Resource

  property :id, Serial
  property :temp, Integer
  belongs_to :city
end
