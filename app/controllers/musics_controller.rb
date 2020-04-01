class MusicsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_room, only: [:new, :create, :destroy]

  def new
    @musics = Music.where(room_id: @room)
    @counter = Music.last.id
    @counter += 1
  end

  def create
    @music = Music.new(music_params)
    user_name = session[:user_name]
    user_id = User.where(name: user_name)[0].id
    @music.user_id = user_id
    @counter = Music.last.id
    @counter += 1
    if @music.save
      RoomChannel.broadcast_to(@room, render_to_string(partial: 'video', locals: { music: @music, counter: @counter }))
    end
  end

  def destroy
  end

  private

  def music_params
    params.require(:music).permit(:url, :title, :room_id)
  end

  def find_room
    @room = Room.find(params[:room_id])
  end
end
