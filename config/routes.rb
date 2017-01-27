Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :destroy, :update]
    end
  end
end
