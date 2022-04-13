import React, { useEffect, useState } from "react";
import Popup from "./popupuser";
import PopupAdd from "./popupadd";
import apiCaller from "src/Utils/apiCaller/apiCaller";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataUser } from "src/Utils/store/action/userAction";

// import axios from "axios"

import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CButton,
  CButtonGroup,
} from "@coreui/react";

function User() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(FetchDataUser());
  }, [dispatch]);

  console.log("data user", data);
  // lấy dữ liệu từ api

  // useEffect(() => {
  //   const listRooms = async () => {
  //     try {
  //       const ress = await apiCaller("users/findAll", "GET", null);
  //       const res = await axios.get("https://reqres.in/api/users?page=2");
  //       // console.log("data nhận:", res.data.data);
  //       console.log("data REQ:", res.data.data);
  //       console.log("data QUY", ress);
  //     } catch (error) {
  //       console.log("Missed");
  //     }
  //   };
  //   listRooms();
  // }, []);

  return (
    <>
      <div>
        <h1> User Management </h1>

        <PopupAdd />
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">User name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Password</CTableHeaderCell>
              <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Birthday</CTableHeaderCell>
              <CTableHeaderCell scope="col">Adress </CTableHeaderCell>
              <CTableHeaderCell scope="col">Phone </CTableHeaderCell>
              <CTableHeaderCell scope="col">Roles </CTableHeaderCell>
              <CTableHeaderCell scope="col"> </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow color="secondary">
              {/* {listuser.data.map((item) => (           
            <>
            <CTableDataCell key={item.id} >{item.id}</CTableDataCell>
            <CTableHeaderCell scope="row"> {item.email} </CTableHeaderCell>
            <CTableHeaderCell scope="row">215497833</CTableHeaderCell>
            <CTableDataCell>Đinh Thiên Thoại</CTableDataCell>
            <CTableDataCell>01/09/2000</CTableDataCell>
            <CTableDataCell>55/12 NGO May</CTableDataCell>
            <CTableDataCell>0387397253</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>
            </>
          ))} */}

              <CTableDataCell>
                <CButtonGroup
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <Popup />
                  <CButton color="dark">Delete</CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </>
  );
}

export default User;
