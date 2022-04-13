import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listUserReducer from "./UserReducer";
import LoginAdmin from "./loginAdminReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,

  user: listUserReducer,

});

export default rootReducer;
