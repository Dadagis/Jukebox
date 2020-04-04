class Api::V1::MusicsController < Api::V1::BaseController
  before_action :find_music, only: [:show]

  def show
  end

  private

  def find_music
    @music = Music.find_by(url: params[:url])
  end
end
