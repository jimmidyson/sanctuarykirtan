require 'dm-timestamps'

class Video
  include DataMapper::Resource

  # property <name>, <type>
  property :id,          Serial
  property :name,        String,   :length => 1..255
  property :description, String,   :length => 1..255
  property :youtube_id,  String,   :length => 1..32
  property :short_url,   String,   :length => 1..255,   :index => true
  property :created_at,  DateTime,                      :index => true
  property :created_on,  Date
  property :updated_at,  DateTime
  property :updated_on,  Date

  before :save do |video|
    video.short_url = video.name.downcase.gsub(/[^a-z\s]/, '').gsub(' ', '-')
  end
end
