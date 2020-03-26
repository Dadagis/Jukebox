class Room < ApplicationRecord
  has_many :users
  has_many :musics

  validates :name, presence: true, uniqueness: true
end
