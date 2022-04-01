import React, { useState } from "react";
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
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">ID Card</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow color="secondary">
            <CTableDataCell>#1</CTableDataCell>
            <CTableHeaderCell scope="row">Đinh Thiên Thoại</CTableHeaderCell>
            <CTableHeaderCell scope="row">215497833</CTableHeaderCell>
            <CTableDataCell>vmaxmartis@gmail.com</CTableDataCell>
            <CTableDataCell>0387397253</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>
            <CTableDataCell>
              <>
                <CTooltip
                  content="Check in : 15h30 3/4/2022 || Room : 201 "
                  placement="top"
                >
                  <CButton color="info" shape="rounded-pill" variant="outline">
                    Check in
                  </CButton>
                </CTooltip>
              </>
            </CTableDataCell>
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
            <CTableHeaderCell scope="row">Vmax Martis</CTableHeaderCell>
            <CTableHeaderCell scope="row">215497833</CTableHeaderCell>
            <CTableDataCell>Th@gmail.com</CTableDataCell>
            <CTableDataCell>0397702472</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>
            <CTableDataCell>
              <>
                <CTooltip
                  content="Check Out : 9h30 6/4/2022 || Room : 201 ||
           Total amount: 500,000 VND"
                  placement="top"
                >
                  <CButton color="success" shape="rounded-pill">
                    Check out
                  </CButton>
                </CTooltip>
              </>
            </CTableDataCell>
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
