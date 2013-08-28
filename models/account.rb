class Account
  include DataMapper::Resource

  # Properties
  property :id,               Serial
  property :name,             String
  property :email,            String
  property :role,             String
  property :provider,         String

  ##
  # This method is used by AuthenticationHelper
  #
  def self.find_by_id(id)
    get(id) rescue nil
  end

end
