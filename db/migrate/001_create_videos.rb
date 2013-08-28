migration 2, :create_videos do
  up do
    create_table :videos do
      column :id, Integer, :serial => true
      column :name, DataMapper::Property::String, :length => 255
      column :description, DataMapper::Property::String, :length => 255
      column :youtube_id, DataMapper::Property::String, :length => 32
      column :short_url, DataMapper::Property::String, :length => 255
      column :created_at, DataMapper::Property::DateTime
      column :created_on, DataMapper::Property::Date
      column :updated_at, DataMapper::Property::DateTime
      column :updated_on, DataMapper::Property::Date
    end

    create_index :videos, :name
    create_index :videos, :short_url
  end

  down do
    drop_table :videos
  end
end
