import ApiCaller from "src/Utils/apiCaller/apiCaller";
import * as a from "../../constant";

export const FetchDataService = () => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("services/findAll", "GET", null);
      dispatch({ type: a.GET_DATA_SERVICE, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddDataService = (newData) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller("services/create", "POST", newData);
      dispatch({ type: a.ADD_DATA_SERVICE, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateDataService = (id, updateService) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(
        `services/update/${id}`,
        "PUT",
        updateService
      );
      dispatch({ type: a.UPDATE_DATA_SERVICE, payload: res.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteDataService = (serviceId) => {
  return async (dispatch) => {
    try {
      const res = await ApiCaller(
        `services/delete/${serviceId}`,
        "DELETE",
        null
      );
      dispatch({ type: a.DELETE_DATA_SERVICE, payload: serviceId });
    } catch (error) {
      console.log(error);
    }
  };
};
