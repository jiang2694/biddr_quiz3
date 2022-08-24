import React from "react";
import { useState } from 'react'

import { Auction } from "../api/auction";
import AuctionNewForm from "./AuctionNewForm";
import { Navigate } from "react-router-dom";

export default function AuctionNewPage() {
  const [auction, setAuction] = useState(null)
  const [errors, setErrors] = useState(null)

  const createNewAuction = (params) => {
    Auction.create(params).then((auction) => {
      if (auction.errors) {
        setErrors(auction.errors);
      } else {
        setAuction(auction)
      }
    });
  }

  return (
    <div>
      {auction &&
        <Navigate to={`/auctions/${auction.id}`} replace={true} />
      }
      <AuctionNewForm
        errors={errors}
        submitForm={createNewAuction}
      />
    </div>
  );
}
