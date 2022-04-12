//test config redux
const initialState = {
  services: [],
};

const listServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_SERVICE":
      return { ...state, services: action.payload };

    default:
      return state;
  }
};

export default listServiceReducer;
