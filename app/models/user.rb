class User < ApplicationRecord
  has_many :musics
  belongs_to :room

  validates :name, presence: true, uniqueness: true
end
