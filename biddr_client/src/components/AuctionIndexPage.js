import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Auction } from "../api/auction";
import Spinner from "./Spinner";

export default function AuctionIndexPage() {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Auction.all().then((auctionsData) => {
      setAuctions(auctionsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner message="Loading auctions" />;
  } else {
    return (
      <main>
        <h2 className="ui horizontal divider header">Auctions</h2>
        <ul className="ui list">
          {auctions.map((auction) => (
            <li className="item" key={auction.id}>
              <Link to={`/auctions/${auction.id}`} className="ui link" href="">
                {auction.title}
              </Link>
              <p>
                posted on {new Date(auction.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
