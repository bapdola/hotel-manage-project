import ApiCaller from "src/Utils/apiCaller/apiCaller";

export const FetchData = () => {
  return async (dispatch) => {
    try {
      const data = await ApiCaller("room/findAll", "GET", null, "");
      dispatch({ type: "GET_DATA", payload: data.data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
