class Music < ApplicationRecord
  belongs_to :room
  belongs_to :user

  validates :url, presence: true, uniqueness: true
end
