import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";

import * as a from "../../constant";

export const FetchData = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("room/findAll", "GET", null);
      dispatch({ type: "GET_DATA", payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
