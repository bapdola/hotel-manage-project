import React from "react";
import axios from "axios";
import * as Config from "./Config";
import cookie from "react-cookies";
<<<<<<< HEAD

export default async function ApiCaller(endpoint, method = "GET", body) {
  try {
    const loginData = cookie.load("ADMIN_DATA") || {}; // if undefined -> {}
    const token = loginData.Token; // undefined.Token nên nó lỗi
=======
export default async function ApiCaller(endpoint, method = "GET", body, token) {
  try {
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
    let res = await axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
      headers: { Authorization: `Bearer ${token}` },
    });
<<<<<<< HEAD
    return res;
=======
    return res
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
  } catch (err) {
    console.error(err);
  }
}
