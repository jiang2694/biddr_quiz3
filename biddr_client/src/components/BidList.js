import React from "react";

import BidDetails from "./BidDetails";

export default function BidList(props) {
  return (
    <div
      style={{
        marginTop: "4em",
      }}
    >
      <h2 className="ui horizontal divider header">Previous Bids</h2>
      <ul className="ui list ">
        {props.bids.map((bid) => (
          <BidDetails key={bid.id} {...bid} />
        ))}
      </ul>
    </div>
  );
}
