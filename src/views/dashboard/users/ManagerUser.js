import React, { useEffect, useState } from "react";
import Popup from "./popupuser";
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
  CPopover,
  CForm,
  CCardText,
  CCardTitle,
  CCardBody,
  CCardImage,
  CCard,
  CCardLink,
  CListGroupItem,
  CListGroup,
  CTooltip,
} from "@coreui/react";

function User() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1> User Management </h1>
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
            <CTableDataCell>#1</CTableDataCell>
            <CTableHeaderCell scope="row">
              Vmaxmartis@gmail.com
            </CTableHeaderCell>
            <CTableHeaderCell scope="row">215497833</CTableHeaderCell>
            <CTableDataCell>Đinh Thiên Thoại</CTableDataCell>
            <CTableDataCell>01/09/2000</CTableDataCell>
            <CTableDataCell>55/12 NGO May</CTableDataCell>
            <CTableDataCell>0387397253</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>
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

          <CTableRow color="info">
            <CTableDataCell>#2</CTableDataCell>
            <CTableHeaderCell scope="row">Roin@gmail.com</CTableHeaderCell>
            <CTableHeaderCell scope="row">215497833</CTableHeaderCell>
            <CTableDataCell>Th@gmail.com</CTableDataCell>
            <CTableDataCell>01/09/2000</CTableDataCell>
            <CTableDataCell>55/12 NGO May</CTableDataCell>
            <CTableDataCell>0387397253</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>

            <CTableDataCell>
              <CButtonGroup
                role="group"
                aria-label="Basic mixed styles example"
              >
                <Popup />
                <>
                  <CButton color="dark" onClick={() => setVisible(!visible)}>
                    Delete
                  </CButton>
                  <CModal visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader>
                      <CModalTitle>Delete User</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Delete user : Vmax martis</CModalBody>
                    <CModalFooter>
                      <CButton
                        color="secondary"
                        onClick={() => setVisible(false)}
                      >
                        Close
                      </CButton>
                      <CButton color="danger">Delete User</CButton>
                    </CModalFooter>
                  </CModal>
                </>
              </CButtonGroup>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  );
}

export default User;
