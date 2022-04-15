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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataService());
  }, [dispatch]);

  const data = useSelector((state) => state.service.services);

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
                  <CTableDataCell>{item.price} VND</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <PopupUpdate
                      serviceId={item?.uuid}
                      nameSer={item?.name}
                      priceSer={item?.price}
                      hotelId={item?.hotelId}
                    />{" "}
                    <PopupDelete serviceId={item?.uuid} />
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
