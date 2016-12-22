class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :menu_de
      t.string :menu_en
      t.string :title_de
      t.string :title_en
      t.text :content_de
      t.text :content_en

      t.timestamps null: false
    end
  end
end
