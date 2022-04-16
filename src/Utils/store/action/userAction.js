import * as a from "../../constant";
import ApiCaller from "src/Utils/apiCaller/apiCaller";

export const FetchDataUser = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_USERS, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const AddDataUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("users/create", "POST", data);
      dispatch({ type: a.ADD_DATA_USERS, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateDataUser = (data, id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`users/update/${id}`, "PUT", data);
      dispatch({ type: a.UPDATE_DATA_USERS, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const DeleteDataUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(`users/delete/${id}`, "DELETE", null);
      dispatch({ type: a.DELETE_DATA_USERS, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const LoadListRole = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("role/findall", "GET", null);
      dispatch({ type: a.GET_DATA_ROLE, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
