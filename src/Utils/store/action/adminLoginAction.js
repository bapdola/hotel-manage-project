import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

import * as a from "../../constant";

const AdminLoginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { username, password });
      cookie.save("ADMIN_DATA", res.data);
      dispatch({ type: a.LOGIN_ADMIN, payload: res.data.Token });
    } catch (error) {
      console.log(error);
    }
  };
};

export default AdminLoginAction;

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
