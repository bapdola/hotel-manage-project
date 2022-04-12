import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
const token = cookie.load("ADMIN_DATA");

export const FetchData = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("room/findAll", "GET", null, token);
      dispatch({ type: "GET_DATA", payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};