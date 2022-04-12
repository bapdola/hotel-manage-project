import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listServiceReducer from "./ServiceReducer";
import LoginAdmin from "./loginAdminReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
});

export default rootReducer;
