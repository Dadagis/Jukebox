class User < ApplicationRecord
  has_many :musics
  belongs_to :room
end
