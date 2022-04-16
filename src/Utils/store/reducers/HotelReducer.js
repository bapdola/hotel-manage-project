import * as a from "../../constant";

const initialState = {
  hotels: [],
};

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_HOTEL:
      return { ...state, hotels: action.payload };
    case a.ADD_DATA_HOTEL:
      return { ...state, hotels: action.payload };
    case a.UPDATE_DATA_HOTEL:
      return { ...state, hotels: action.payload };
    case a.DELETE_DATA_HOTEL:
      return {
        ...state,
        hotels: state.hotels.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default HotelReducer;
