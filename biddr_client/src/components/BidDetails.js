import React from "react";

export default function BidDetails(props) {
  return (
    <div className="ui item">
      <p>
        ${props.bid_amount} on {new Date(props.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
