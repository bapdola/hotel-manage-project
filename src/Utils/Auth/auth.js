import cookie from "react-cookies";

const Auth = () => {
<<<<<<< HEAD
  let isAdmin = cookie.load("ADMIN_DATA") || {};
  if (isAdmin.role === "Root" || isAdmin.role === "Admin") {
    return isAdmin.Token;
  }
=======
  let isLoggIn = cookie.load("ADMIN_DATA") == null ? false : true;
  return isLoggIn;
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
};

export default Auth;
