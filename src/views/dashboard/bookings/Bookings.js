import React from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";
import { BookingFetchData } from "src/Utils/store/action/bookingAction";

import PopupDelete from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { formatDate } from "src/Utils/DateTme/dateTime";

function Bookings() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booking.bookings);

  useEffect(() => {
    dispatch(BookingFetchData());
  }, [dispatch]);

  return (
    <>
      <CTable responsive striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Customer Id Card</CTableHeaderCell>
            <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Room Name</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((item, inx) => {
              return (
                <CTableRow key={item.id}>
                  <CTableHeaderCell scope="row">{inx + 1}</CTableHeaderCell>
                  <CTableDataCell>{item.customerName}</CTableDataCell>
                  <CTableDataCell>{item.customerIdCard}</CTableDataCell>
                  <CTableDataCell>{formatDate(item.fromDate)}</CTableDataCell>
                  <CTableDataCell>{formatDate(item.toDate)}</CTableDataCell>
                  <CTableDataCell>{item.roomName}</CTableDataCell>
                  <CTableDataCell>
                    {/* <PopupUpdate /> <PopupDelete /> */}
                  </CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
    </>
  );
}

export default Bookings;
