import cookie from "react-cookies";

const Auth = () => {
  let isAdmin = cookie.load("ADMIN_DATA") || {};
  if (isAdmin.role === "Root" || isAdmin.role === "Admin") {
    return isAdmin.Token;
  }
};

export default Auth;
