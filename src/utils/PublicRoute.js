import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isAuthenticated = localStorage.getItem("vanky_token");

  return isAuthenticated ? <Navigate to="/login" /> : <Outlet />;
};

export default PublicRoutes;