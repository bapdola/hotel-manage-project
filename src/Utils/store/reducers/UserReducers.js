import * as a from "../../constant";

const initialState = {
  users: [],
  roles: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_USERS:
      return { ...state, users: action.payload };
    case a.ADD_DATA_USERS:
      return { ...state, users: action.payload };

    case a.UPDATE_DATA_USERS:
      return { ...state, users: action.payload };

    case a.DELETE_DATA_USERS:
      return {
        ...state,
        users: state.services.filter((item) => item.id !== action.payload),
      };

    case a.GET_DATA_ROLE:
      return { ...state, roles: action.payload };

    // case a.UPDATE_DATA_SERVICE:
    //   return { ...state, services: action.payload };

    default:
      return state;
  }
};

export default UsersReducer;
