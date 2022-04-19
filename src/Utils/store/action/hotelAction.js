import ApiCaller from "src/Utils/apiCaller/apiCaller";
import cookie from "react-cookies";
import { toast } from "react-toastify";

import * as a from "../../constant";

export const HotelFetchData = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("hotel/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_HOTEL, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddDataHotel = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("hotel/create", "POST", data);
      dispatch({ type: a.ADD_DATA_HOTEL, payload: res.data.inforHotel });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteDataHotel = (id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`hotel/delete/${id}`, "DELETE", null);
      dispatch({ type: a.DELETE_DATA_HOTEL, payload: res.data.inforHotel });
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateDataHotel = (data, id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`hotel/update/${id}`, "PUT", data);
      dispatch({ type: a.UPDATE_DATA_HOTEL, payload: res.data.inforHotel });
    } catch (error) {
      console.log(error);
    }
  };
};
