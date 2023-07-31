Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :votes, only: [:create, :destroy]
    # post '/question/:id/vote', to: 'questions#vote', as: 'vote'
    resources :questions, only: [:index, :create, :show, :destroy, :update]
    resources :answers, only: [:index, :create, :show, :destroy, :update]
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end