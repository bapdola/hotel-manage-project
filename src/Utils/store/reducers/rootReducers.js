import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import LoginAdmin from "./loginAdminReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,
});

export default rootReducer;
