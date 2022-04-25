import * as a from "../../constant";

const initialState = {
  bookings: [],
};

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_BOOKROOM:
      return { ...state, bookings: action.payload };

    default:
      return state;
  }
};

export default BookingReducer;
