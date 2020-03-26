class CreateRoom
  def initialize
  end

  def self.call
    @room = Room.new(name: @params[:name])
  end
end
