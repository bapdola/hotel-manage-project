import * as a from "../../constant";

const initialState = {
  rooms: [],
};

const listRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, rooms: action.payload };

    default:
      return state;
  }
};

export default listRoomReducer;
