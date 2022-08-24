import React from "react";

export default function AuctionDetails(props) {
  let max_bid_amount = 0;
  props.bids.forEach((bid) => {
    if (bid.bid_amount > max_bid_amount) max_bid_amount = bid.bid_amount;
  });
  return (
    <div className="ui segment">
      <h2 className="ui header">{props.title}</h2>
      <p>
        {props.description} <br />
        Current Price: ${max_bid_amount} <br />
        Ends at: {new Date(props.ends_at).toLocaleDateString()} <br />
        Reserve Price: ${props.reserve_price}
      </p>
    </div>
  );
}
