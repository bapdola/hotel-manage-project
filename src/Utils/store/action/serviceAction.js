import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
const token = cookie.load("ADMIN_DATA");

export const FetchDataService = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("services/findAll", "GET", null, token);
      dispatch({ type: "GET_DATA_SERVICE", payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
