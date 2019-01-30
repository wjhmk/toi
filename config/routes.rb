Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :questions

  get 'level1', to: 'questions#level1'
  get 'level2', to: 'questions#level2'
  get 'level3', to: 'questions#level3'

  get 'radian_frequency_method', to: 'questions#radian_frequency_method'
  get 'addition_theorem', to: 'questions#addition_theorem'
  get 'interrelationship', to: 'questions#interrelationship'
  get 'double_angle', to: 'questions#double_angle'
  get 'synthesis', to: 'questions#synthesis'

end
