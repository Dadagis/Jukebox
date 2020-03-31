class MusicsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @music = Music.new(url: params[:videoId], room_id: params[:room_id], user_id: params[:user_id])
    @music.save!
    redirect_to root_path
  end

  def destroy
  end

  private

  def music_params
    params.require(:music).permit(:videoId, :room_id, :user_id)
  end
end
