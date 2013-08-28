require 'dm-timestamps'

class Account
  include DataMapper::Resource

  # Properties
  property :id,          Serial
  property :name,        String
  property :email,       String,   :unique_index => :email_provider_index
  property :role,        String
  property :provider,    String,   :unique_index => :email_provider_index
  property :created_at,  DateTime
  property :updated_at,  DateTime

  ##
  # This method is used by AuthenticationHelper
  #
  def self.find_by_id(id)
    get(id) rescue nil
  end

end
