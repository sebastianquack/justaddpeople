class Renameflickrseturl < ActiveRecord::Migration
  def change
    rename_column :projects, :flickr_set_url, :flickr_set_id
    remove_column :projects, :subtitle_de
    remove_column :projects, :subtitle_en    
  end
end
