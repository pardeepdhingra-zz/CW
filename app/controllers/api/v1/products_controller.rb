class Api::V1::ProductsController < Api::V1::BaseController
  before_action :set_product, only: [:destroy, :update]

  def index
    respond_with Product.all
  end

  def create
    respond_with :api, :v1, Product.create(product_params)
  end

  def destroy
    respond_with @product.destroy
  end

  def update
    @product.update_attributes(product_params)
    respond_with @product, json: @product
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:barcode, :name, :description, :purchase_date, :seller_name, :warranty_expire_date)
  end
end
