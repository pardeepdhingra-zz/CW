class Product < ActiveRecord::Base
  validates :barcode, :name, :purchase_date, :warranty_expire_date, presence: true
  validates :barcode, uniqueness: true
end
