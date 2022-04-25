import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import { toast } from "react-toastify";

import * as a from "../../constant";

export const BookingFetchData = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("bookroom/findAll", "GET", null);
      if (res.status === 200) {
        dispatch({ type: a.GET_DATA_BOOKING, payload: res.data.result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
