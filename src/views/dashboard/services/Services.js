import React, { useEffect } from "react";
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
import { FetchDataService } from "src/Utils/store/action/serviceAction";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  const data = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  console.log("data service", data);
  useEffect(() => {
    dispatch(FetchDataService());
  }, [dispatch]);
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Price</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              {" "}
              <PopupAdd />{" "}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((item, inx) => {
              return (
                <CTableRow key={inx}>
                  <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                  <CTableDataCell>${item.price}</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <PopupUpdate /> <PopupDelete />
                  </CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
    </>
  );
};

export default Services;
