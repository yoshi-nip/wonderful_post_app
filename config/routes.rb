Rails.application.routes.draw do
  root :to => 'articles#index'
  devise_for :users
  devise_scope :user do
    delete 'sign_out', to: 'devise/sessions#destroy'
  end
  # resources :users
  resources :articles
  resources :mypage
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
