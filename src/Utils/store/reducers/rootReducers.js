import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import listRoomReducer from "./RoomReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  room: listRoomReducer,
});

export default rootReducer;
