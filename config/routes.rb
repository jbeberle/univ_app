Rails.application.routes.draw do
  root "courses#index"
  resources :students
  resources :courses
  get 'courses/index'
  resources :books
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
