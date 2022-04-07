import React from "react";
import axios from "axios";
import * as Config from "./Config";
//nơi chứa nhận data: BODY
export default async function apiCaller(endpoint, method = "GET", body) {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5Yzk4YzVhZC1mN2RkLTQ1NDktOTcwNi0zODc0NzkxZjc1NTkiLCJpYXQiOjE2NDkyMDc5NzB9.WK4xeTzgzUypo_AvOlQa0PJySCR72K_O_pcutaspXuE";

  try {
    let res = await axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body,
      // headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    console.error(err);
  }
}
