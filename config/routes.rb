Rails.application.routes.draw do
  root to: 'pages#home'
  resources :rooms, only: [:show, :create] do
    resources :musics, only: [:new, :create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
