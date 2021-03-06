class RoomsController < ApplicationController
  before_action :find_room, only: [:show]

  def show
    @musics = Music.where(room_id: @room.id)
    @users = User.where(room_id: @room.id)
    @first_music = Music.where(room_id: @room.id).first
  end

  def create
    @create = Room.new(room_params)
    @create.save!
    # new_room = CreateRoom.call
    redirect_to new_room_music_path(@create)
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end

  def find_room
    @room = Room.find(params[:id])
  end
end
