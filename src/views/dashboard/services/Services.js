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
import { useDispatch, useSelector } from "react-redux";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataService());
  }, [dispatch]);

  const data = useSelector((state) => state.service.services);
  console.log(data);

  return (
    <>
      <CTable responsive striped>
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
            data.map((item) => {
              return (
                <CTableRow key={item.id}>
                  <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                  <CTableDataCell>{item.price} VND</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <PopupUpdate
                      serviceId={item?.id}
                      nameSer={item?.name}
                      priceSer={item?.price}
                      HotelId={item?.hotelId}
                    />{" "}
                    <PopupDelete serviceId={item?.id} />
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
