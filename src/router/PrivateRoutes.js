import React from "react";
import { PropTypes } from "prop-types";

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ isLogged, redirectLink }) {
  return isLogged ? <Outlet /> : <Navigate to={redirectLink} />;
}
PrivateRoutes.propTypes = {
  isLogged: PropTypes.bool,
  redirectLink: PropTypes.string,
};
export default PrivateRoutes;
