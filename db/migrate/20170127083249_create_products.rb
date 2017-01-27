class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.date :purchase_date
      t.date :warranty_expire_date
      t.string :seller_name
      t.string :barcode

      t.timestamps null: false
    end
  end
end
