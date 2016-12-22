class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title_de
      t.string :title_en
      t.string :subtitle_de
      t.string :subtitle_en
      t.string :flickr_set_url
      t.text :description_de
      t.text :description_en

      t.timestamps null: false
    end
  end
end
