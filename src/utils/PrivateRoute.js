// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ component: component, ...rest }) => {
//   const token = localStorage.getItem("token");
//   return token ? <Outlet /> : <Navigate to="/Login" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("vanky_token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
