import React from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";
import PopupDelete from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";
import PopupAdd from "./PopupAdd";

const Services = () => {
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">Trọng Thiện</CTableHeaderCell>
            <CTableDataCell>10000$</CTableDataCell>
            <CTableDataCell className="text-center">
              <PopupAdd /> <PopupUpdate /> <PopupDelete />
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">Trọng Thiện</CTableHeaderCell>
            <CTableDataCell>10000$</CTableDataCell>
            <CTableDataCell className="text-center">
              <PopupAdd /> <PopupUpdate /> <PopupDelete />
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  );
};

export default Services;
