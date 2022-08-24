Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions, only: %i[create show index]
      resources :bids, only: [:create]
      resource :session, only: %i[create destroy]
      resource :user, only: [:create] do
        get :current, on: :collection
      end
    end
  end
end
