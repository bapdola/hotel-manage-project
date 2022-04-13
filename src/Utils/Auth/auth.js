import cookie from "react-cookies";

const Auth = () => {
  let isLoggIn = cookie.load("ADMIN_DATA") == null ? false : true;
  return isLoggIn;
};

export default Auth;
