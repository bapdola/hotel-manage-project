//test config redux
const initialState = {
  users: [],
};

const listUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default listUserReducer;
