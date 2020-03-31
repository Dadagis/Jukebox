class MusicsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @room = Room.find(params[:room_id])
    @music = Music.new(music_params)
    if @music.save
      RoomChannel.broadcast_to(@room, render_to_string(partial: 'video', locals: { music: @music }))
    end
  end

  def destroy
  end

  private

  def music_params
    params.require(:music).permit(:url, :room_id, :user_id)
  end
end
