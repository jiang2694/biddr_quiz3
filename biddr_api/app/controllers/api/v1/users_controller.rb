class Api::V1::UsersController < ApplicationController
  def current
    render json: current_user
  end

  def create
    user = User.new params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    if user.save
      session[:user_id] = user.id
      render json: { id: user.id }, status: 200
    else
      render(
        json: { errors: [user.errors.full_messages.join(', ')] },
        status: 422 # Unprocessable Entity
      )
    end
  end
end
