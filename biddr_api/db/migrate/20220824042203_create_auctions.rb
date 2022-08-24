class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.integer :reserve_price
      t.datetime :ends_at

      t.timestamps
    end
  end
end
