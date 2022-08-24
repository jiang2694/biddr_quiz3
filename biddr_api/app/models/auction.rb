class Auction < ApplicationRecord
  belongs_to :user

  has_many :bids, dependent: :destroy

  before_validation :capitalize_title

  validates :title, presence: true
  validates :description, length: { minimum: 5, maximum: 500 }
  validates :title, uniqueness: { scope: :description }
  validates :reserve_price, numericality: { greater_than_or_equal_to: 0 }

  validate :ends_at_cannot_be_in_the_past

  default_scope { order(created_at: :DESC) }

  private

  def ends_at_cannot_be_in_the_past
    errors.add(:ends_at, "can't be in the past") if ends_at.present? && ends_at < Date.today
  end

  def capitalize_title
    self.title = title.split(' ').map(&:capitalize).join(' ')
  end
end
