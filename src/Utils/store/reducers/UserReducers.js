import * as a from "../../constant";

const initialState = {
  users: [],
  error: "",
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_USERS:
      return { ...state, users: action.payload };

    case a.ADD_DATA_USERS:
      return { ...state, users: action.payload };
    case a.ADD_DATA_USERS_FAILED:
      return { ...state, error: action.error };

    case a.UPDATE_DATA_USERS:
      return { ...state, users: action.payload };

    case a.DELETE_DATA_USERS:
      return {
        ...state,
        users: state.services.filter((item) => item.uuid !== action.payload),
      };
    // case a.UPDATE_DATA_SERVICE:
    //   return { ...state, services: action.payload };

    default:
      return state;
  }
};

export default UsersReducer;
