class Removesectiontitle < ActiveRecord::Migration
  def change
    remove_column :sections, :title_de
    remove_column :sections, :title_en
  end
end
