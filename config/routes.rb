Rails.application.routes.draw do
  root to: "pages#top"
  get "top", to: "pages#top"
  get "company", to: "pages#company"
  get "employment", to: "pages#employment"
  get "contactus", to: "pages#contactus"
end
