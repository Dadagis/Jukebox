class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    @user.save!
    session[:user_name] = @user.name
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :room_id)
  end
end
