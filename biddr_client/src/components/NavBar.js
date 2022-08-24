import React from "react";
import { NavLink } from "react-router-dom";
import { Session } from "../api/session";

export default function NavBar({ currentUser, onSignOut }) {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };

  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Biddr
      </NavLink>
      <div className="ui secondary pointing right menu">
        <NavLink to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/auctions" className="item">
          Auctions
        </NavLink>
        {currentUser ? (
          <>
            <NavLink to="/auctions/new" className="item">
              Auction New
            </NavLink>
            <span className="item">Welcome, {`${currentUser.full_name}`}</span>
            <button className="item" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/sign_in" className="item">
              Sign In
            </NavLink>
            <NavLink to="/sign_up" className="item">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
