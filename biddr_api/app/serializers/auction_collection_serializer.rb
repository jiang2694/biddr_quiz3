class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :ends_at, :reserve_price, :created_at, :updated_at
  belongs_to :user, key: :owner
end
