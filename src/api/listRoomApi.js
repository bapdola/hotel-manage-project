import axios from "axios";
import queryString from "query-string";
import axiosClient from "./axiosClient";
// api/listRoomApi.js

// GET /rooms # Lấy ds rooms
// GET /rooms?roomId=123&page=1 # Lọc rooms với params
// GET /rooms/:roomId # Lấy room by ID
// POST /rooms # Tạo một room mới
// PATCH /rooms/:roomId # Cập nhật room có ID là :roomId 
// DELETE /rooms/:roomId # Xoá room có ID là :roomId

class listRoomsApi {
    getAll = (params) => {
    const url = '/rooms';
    return axiosClient.get(url, { params });
    };
   }
   const listroomsApi = new listRoomsApi();
   export default listroomsApi;