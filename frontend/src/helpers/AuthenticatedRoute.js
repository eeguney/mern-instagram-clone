import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute({ user, children }) {
  return user ? children : <Navigate to="/signin" />;
}
