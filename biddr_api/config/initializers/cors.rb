# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins "example.com"
#
#     resource "*",
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(
      'localhost:5500'
    ) # only allow these domains originated requests
    resource(
      '/api/v1/*', # only allow access to 'localhost:3000/api/v1/...'
      headers: :any, # requests can contain any headers
      credentials: true, # because we are sending cookies with the requests
      methods: %i[get post patch put delete options] # allow these http verbs
    )
  end
end
