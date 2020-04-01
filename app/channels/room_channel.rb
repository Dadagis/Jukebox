class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    puts "BONJOUR"
    puts "_________"
    p params[:id]
    room = Room.find(params[:id])
    puts "_________"
    puts room
    puts "AU REVOIR"
    stream_for room
  end
end
