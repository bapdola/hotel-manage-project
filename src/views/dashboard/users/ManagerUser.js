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
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import PopupDelete from "./PopupDelete";
import PopupAdd from "./PopupAdd";
import { useDispatch, useSelector, connect } from "react-redux";
import { FetchDataUser } from "src/Utils/store/action/userAction";
import { LoadListRole } from "src/Utils/store/action/userAction";
import { formatDate } from "../../../Utils/DateTme/dateTime";

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
      <CTable responsive striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">User name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Password</CTableHeaderCell>
            <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Birthday</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address </CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone </CTableHeaderCell>
            <CTableHeaderCell scope="col">Role </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              <PopupAdd />{" "}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((item, inx) => {
              return (
                <CTableRow key={item.id}>
                  <CTableHeaderCell scope="row">{inx + 1}</CTableHeaderCell>
                  <CTableDataCell>{item.username}</CTableDataCell>
                  <CTableDataCell>{item.password}</CTableDataCell>
                  <CTableDataCell>{item.fullName}</CTableDataCell>
                  <CTableDataCell>{formatDate(item.birtDate)}</CTableDataCell>
                  <CTableDataCell>{item.adress}</CTableDataCell>
                  <CTableDataCell>{item.phone}</CTableDataCell>
                  <CTableDataCell>
                    {dataRole.map((role) => {
                      return (
                        <p key={role.id}>
                          {role.id == item.roleId ? role.name : []}
                        </p>
                      );
                    })}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
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
