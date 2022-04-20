import React, { useEffect } from "react";
import PopupUpdate from "./PopupUpdate";

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
import PopupDelete from "./PopupDelete";
import PopupAdd from "./PopupAdd";
import { useDispatch, useSelector, connect } from "react-redux";
import { FetchDataUser } from "src/Utils/store/action/userAction";
import { LoadListRole } from "src/Utils/store/action/userAction";

function User() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user.users);
  const dataRole = useSelector((state) => state.user.roles);

  useEffect(() => {
    dispatch(FetchDataUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(LoadListRole());
  }, []);
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">User name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Password</CTableHeaderCell>
            <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Birthday</CTableHeaderCell>
            <CTableHeaderCell scope="col">Adress </CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              <PopupAdd />{" "}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((item, inx) => {
              return (
                <CTableRow key={item.id}>
                  <CTableDataCell>{inx + 1}</CTableDataCell>
                  <CTableHeaderCell scope="row">
                    {item.username}
                  </CTableHeaderCell>
                  <CTableDataCell>{item.password}</CTableDataCell>
                  <CTableDataCell scope="row">{item.fullName}</CTableDataCell>
                  <CTableDataCell>{item.birtDate}</CTableDataCell>
                  <CTableDataCell>{item.adress}</CTableDataCell>
                  <CTableDataCell>{item.phone}</CTableDataCell>
                  <CTableDataCell scope="row">
                    <PopupUpdate
                      userId={item?.id}
                      nameUser={item?.username}
                      Password={item?.password}
                      FullName={item?.fullName}
                      BirtDate={item?.birtDate}
                      Adress={item?.adress}
                      Phone={item?.phone}
                      RoleId={item?.roleId}
                      HotelId={item?.hotelId}
                    />{" "}
                    <PopupDelete userId={item?.id} />
                  </CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
    </>
  );
}

export default User;
