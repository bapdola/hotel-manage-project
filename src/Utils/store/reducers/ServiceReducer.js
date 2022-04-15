import * as a from "../../constant";

const initialState = {
  services: [],
};

const listServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_SERVICE:
      return { ...state, services: action.payload };
    case a.ADD_DATA_SERVICE:
      return { ...state, services: action.payload };
    case a.DELETE_DATA_SERVICE:
      return {
        ...state,
        services: state.services.filter((item) => item.uuid !== action.payload),
      };
    case a.UPDATE_DATA_SERVICE:
      return { ...state, services: action.payload };

    default:
      return state;
  }
};

export default listServiceReducer;
