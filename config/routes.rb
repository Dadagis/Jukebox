Rails.application.routes.draw do
  root to: 'pages#home'
  resources :rooms, only: [:show, :create] do
    resources :musics, only: [:new, :create, :destroy]
    resources :users, only: [:create]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :musics, only: [:show], param: :url
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
