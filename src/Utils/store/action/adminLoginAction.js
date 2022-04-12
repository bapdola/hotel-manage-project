import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
const token = cookie.load("ADMIN_DATA");

const AdminLoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(
        "login",
        "POST",
        { username, password },
        token
      );
      cookie.save("ADMIN_DATA", res.data.Token);
      dispatch({ type: "LOGIN_ADMIN", payload: res.data.Token });
    } catch (error) {
      console.log(error);
    }
  };
};

export default AdminLoginAction;

export const AdminLogut = () => {
  return (dispatch) => {
    cookie.remove("ADMIN_DATA");
    dispatch({ type: "LOGOUT_ADMIN" });
  };
};
