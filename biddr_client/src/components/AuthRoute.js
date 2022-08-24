import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ isAllowed, children }) {
  return isAllowed ? children : <Navigate to="/sign_in" replace={true} />;
}
