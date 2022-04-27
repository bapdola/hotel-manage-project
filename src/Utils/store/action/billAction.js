import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import { toast } from "react-toastify";

import * as a from "../../constant";

export const CreateBill = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("bill/create", "POST", data);
      dispatch({ type: a.CREATE_DATA_BILL, payload: res.data.inforBookroom });
      window.location.reload()
      toast.success("Payment Successfully!!");
    } catch (error) {
      toast.error("create new failed!!");
    }
  };
};
