import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("admin");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? {...props} : <Navigate to="/login" />
      }
    />
  );
}

export default ProtectedRoute;