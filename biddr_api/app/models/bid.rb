class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction

  validates :bid_amount, numericality: { greater_than_or_equal_to: 0 }

  default_scope { order(bid_amount: :DESC) }
end
