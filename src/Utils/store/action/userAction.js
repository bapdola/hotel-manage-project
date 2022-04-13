import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

const token = cookie.load("ADMIN_DATA");

export const FetchDataUser = () => {
  return async (dispatch) => {
    try {
      const data = await ApiCaller("users/findAll", "GET", null, token);
      dispatch({ type: "GET_DATA_USER", payload: data.result });
      console.log("data user", data.data.result);
    } catch (error) {
      console.log(error);
    }
  };
};
