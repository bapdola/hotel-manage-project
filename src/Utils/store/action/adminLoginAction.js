import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

const result = cookie.load("ADMIN_DATA");
const AdminLoginAction = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("login", "POST", { email, password }, result);
      if (res && res.data.token) {
        cookie.save("ADMIN_DATA", res.data.token);
        dispatch({ type: "LOGIN_ADMIN", payload: res.data.token });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default AdminLoginAction;
