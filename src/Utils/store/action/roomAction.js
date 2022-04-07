import apiCaller from "src/Utils/apiCaller/apiCaller";

export const FetchData = () => {
  return async (dispatch) => {
    try {
      const data = await apiCaller("room/findAll", "GET", null);
      dispatch({ type: "GET_DATA", payload: data.data.result });
    } catch (error) {
      console.log(error);
    }
  };
};
