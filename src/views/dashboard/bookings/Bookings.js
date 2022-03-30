import React from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilCloudUpload,
  cilDelete,
  cilList,
  cilShieldAlt,
} from "@coreui/icons";

import { Link } from "react-router-dom";

function Bookings() {
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Room Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Capatiy</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col">Staus</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>trongthien@gmail.com</CTableDataCell>
            <CTableDataCell>Trong Thien</CTableDataCell>
            <CTableDataCell>Single room</CTableDataCell>
            <CTableDataCell>28-jan-2020</CTableDataCell>
            <CTableDataCell>30-jan-2020</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>10000</CTableDataCell>
            <CTableDataCell>Rejected</CTableDataCell>
            <CTableDataCell>
              <Link to="/bookings/edit">
                {" "}
                <button className="btn btn-success">
                  <CIcon icon={cilCloudUpload} size="lg" />
                </button>
              </Link>{" "}
              <Link to="#">
                {" "}
                <button className="btn btn-danger">
                  <CIcon icon={cilDelete} size="lg" />
                </button>
              </Link>{" "}
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>trongthien123@gmail.com</CTableDataCell>
            <CTableDataCell>Trong Thien</CTableDataCell>
            <CTableDataCell>Double room</CTableDataCell>
            <CTableDataCell>28-jan-2020</CTableDataCell>
            <CTableDataCell>30-jan-2020</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>20000</CTableDataCell>
            <CTableDataCell>Rejected</CTableDataCell>
            <CTableDataCell>
              <Link to="/bookings/edit">
                {" "}
                <button className="btn btn-success">
                  <CIcon icon={cilCloudUpload} size="lg" />
                </button>
              </Link>{" "}
              <Link to="#">
                {" "}
                <button className="btn btn-danger">
                  <CIcon icon={cilDelete} size="lg" />
                </button>
              </Link>{" "}
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  );
}

export default Bookings;