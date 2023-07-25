Rails.application.routes.draw do
  root "courses#index"
  get 'courses/index'
  get 'courses/new'
  get 'about', to: 'pages#about'
end
