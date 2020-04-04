class Api::V1::BaseController < ActionController::API
  before_action :set_cors_header

  def set_cors_header
    response.headers['Access-Control-Allow-Origin'] = '*'
  end
end
