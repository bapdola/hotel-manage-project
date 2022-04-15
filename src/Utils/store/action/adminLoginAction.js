import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

<<<<<<< HEAD
import * as a from "../../constant";

const AdminLoginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { username, password });
      cookie.save("ADMIN_DATA", res.data);
      dispatch({ type: a.LOGIN_ADMIN, payload: res.data.Token });
=======
const result = cookie.load("ADMIN_DATA");
const AdminLoginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { email, password }, result);
      if (res && res.data.token) {
        cookie.save("ADMIN_DATA", res.data.token);
        dispatch({ type: "LOGIN_ADMIN", payload: res.data.token });
      }
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
    } catch (error) {
      console.log(error);
    }
  };
};

export default AdminLoginAction;
<<<<<<< HEAD

export const AdminLogut = () => {
  return (dispatch) => {
    try {
      cookie.remove("ADMIN_DATA");
      dispatch({ type: a.LOGOUT_ADMIN });
    } catch (error) {
      console.log(error);
    }
  };
};
=======
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
