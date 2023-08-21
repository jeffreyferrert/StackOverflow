class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      errors = {}
      errors[:email] = @user.errors[:email].first if @user.errors[:email].any?
      errors[:username] = @user.errors[:username].first if @user.errors[:username].any?
      errors[:password] = @user.errors[:password].first if @user.errors[:password].any?
      errors[:confirmPassword] = @user.errors[:confirmPassword].first if @user.errors[:confirmPassword].any?
      render json: { errors: errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
