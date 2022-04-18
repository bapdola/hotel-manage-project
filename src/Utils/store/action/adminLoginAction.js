import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import * as a from "../../constant";
import { toast } from "react-toastify";

const AdminLoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { username, password });
      if (res.status === 200) {
        cookie.save("ADMIN_DATA", res.data);
        dispatch({ type: a.LOGIN_ADMIN, payload: res.data.Token });
        toast.success("Login Success");
      }
    } catch (error) {
      toast.error("Incorrect login or password!");
    }
  };
};

export default AdminLoginAction;

export const AdminLogut = () => {
  return (dispatch) => {
    try {
      cookie.remove("ADMIN_DATA");
      dispatch({ type: a.LOGOUT_ADMIN });
      toast.success("Logout Success");
    } catch (error) {
      toast.error("Logout Failed!");
    }
  };
};
