import * as a from "../../constant";

const initialState = {
  bills: {},
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.GET_DATA_BILL:
      return { ...state, bills: action.payload };
    case a.CREATE_DATA_BILL:
      const bills = state.bills.concat(action.payload);
      return { ...state, bills };

    default:
      return state;
  }
};

export default BillReducer;
