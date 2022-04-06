import React from "react";
import { PropTypes } from "prop-types";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({isAuth,redirect}) => {
  
  return isAuth ? <Outlet/> : <Navigate to={redirect}/>;
}
ProtectedRoutes.propTypes = {
  isAuth: PropTypes.bool,
  redirect:PropTypes.string,
  
};
export default ProtectedRoutes;
