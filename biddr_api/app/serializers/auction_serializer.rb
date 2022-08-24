class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :ends_at, :reserve_price, :created_at, :updated_at

  belongs_to :user, key: :owner
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_amount, :created_at, :updated_at
    belongs_to :user, key: :bidder
  end
end
