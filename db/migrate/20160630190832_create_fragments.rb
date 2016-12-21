class CreateFragments < ActiveRecord::Migration
  def change
    create_table :fragments do |t|
      t.string :name
      t.string :content_en
      t.string :content_de

      t.timestamps null: false
    end
  end
end
