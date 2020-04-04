class MusicsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_room, only: [:new, :create, :destroy]

  def new
    @musics = Music.where(room_id: @room)
  end

  def create
    @music = Music.new(music_params)
    user_name = session[:user_name] # Use cookies to get the username
    user_id = User.where(name: user_name)[0].id
    @music.user_id = user_id
    if @music.save
      RoomChannel.broadcast_to(@room, render_to_string(partial: 'video', locals: { music: @music }))
    end
    @last_music = Music.last
  end

  def destroy
    @music = Music.find(params[:id])
    @music.destroy
  end

  private

  def music_params
    params.require(:music).permit(:url, :title, :room_id)
  end

  def find_room
    @room = Room.find(params[:room_id])
  end
end
