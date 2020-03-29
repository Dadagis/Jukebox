class MusicsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @music = Music.new(params[:videoId])
    @music.save
    # redirect_to root_path
  end

  def destroy
  end

  private

  def music_params
    params.require(:music).permit(:videoId)
  end
end
