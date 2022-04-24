import React from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormFeedback,
  CFormSelect,
  CModalFooter,
} from "@coreui/react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { UpdateDataUser } from "src/Utils/store/action/userAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { CurrentUserLogin } from "src/Utils/store/action/userAction";
import { LoadListRole } from "src/Utils/store/action/userAction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [visibleLg, setVisibleLg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataRole = useSelector((state) => state.user.roles);
  const dataUserLogin = useSelector((state) => state.user.currentUserlogin);

  useEffect(() => {
    dispatch(CurrentUserLogin());
  }, [dispatch]);

  const [username, setUserName] = useState(dataUserLogin.username);
  const [password, setPassword] = useState(dataUserLogin.password);
  const [fullName, setFullName] = useState(dataUserLogin.fullName);
  const [birtDate, setBirthday] = useState(dataUserLogin.birtDate);
  const [adress, setAdress] = useState(dataUserLogin.adress);
  const [phone, setPhone] = useState(dataUserLogin.phone);
  const [roleId, setRoleId] = useState(dataUserLogin.roleId);

  console.log(dataRole);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  useEffect(() => {
    dispatch(LoadListRole());
  }, [dispatch]);

  const handleOnSubmit = (data) => {
    const id = dataUserLogin.id;
    if (data) {
      dispatch(UpdateDataUser(data, id));
    }
    navigate("/admin");
  };

  return (
    <>
      <CForm
        className="row g-3"
        noValidate
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <CCol md={6} className="position-relative">
          <CFormLabel htmlFor="validationTooltip01">User Name</CFormLabel>
          <CFormInput
            type="text"
            id="validationTooltip01"
            placeholder="User Name"
            value={username}
            {...register("username", {
              required: true,
              pattern: /^[A-Za-z0-9]+$/i,
            })}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger mt-2">UserName is required</p>
          )}
          {errors.username?.type === "pattern" && (
            <p className="text-danger mt-2">
              {" "}
              Username does not contain special characters
            </p>
          )}
        </CCol>
        <CCol md={6} className="position-relative">
          <CFormLabel htmlFor="validationTooltip02">Password</CFormLabel>
          <CFormInput
            type="upPassword"
            id="validationTooltip02"
            placeholder="Passwords"
            value={password}
            {...register("password", { required: true, minLength: 6 })}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password?.type === "minLength" && (
            <p className="text-danger mt-2">
              Password must be 6 characters long
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-danger mt-2">Password is required</p>
          )}
        </CCol>
        <CCol md={7} className="position-relative">
          <CFormLabel htmlFor="validationTooltip03">Fullname</CFormLabel>
          <CFormInput
            type="text"
            id="validationTooltip03"
            placeholder="Fullname"
            value={fullName}
            {...register("fullName", {
              required: true,
              maxLength: 24,
              pattern: /^[A-Za-z0-9 ]+$/i,
            })}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName?.type === "required" && (
            <p className="text-danger mt-2">fullName is required</p>
          )}
          {errors.fullName?.type === "maxLength" && (
            <p className="text-danger mt-2">
              FullName not than 24 characters long
            </p>
          )}
          {errors.fullName?.type === "pattern" && (
            <p className="text-danger mt-2">
              FullName does not contain special characters
            </p>
          )}
        </CCol>
        <CCol md={5} className="position-relative">
          <CFormLabel htmlFor="validationTooltip04">Birthday</CFormLabel>
          <CFormInput
            type="date"
            id="validationTooltip04"
            placeholder="Birthday"
            value={birtDate}
            {...register("birtDate", { required: true })}
            onChange={(e) => setBirthday(e.target.value)}
          />
          {errors.birtDate?.type === "required" && (
            <p className="text-danger mt-2">birtDate is required</p>
          )}
        </CCol>
        <CCol md={7} className="position-relative">
          <CFormLabel htmlFor="validationTooltip05">Adress</CFormLabel>
          <CFormInput
            type="text"
            id="validationTooltip05"
            placeholder="Adress"
            value={adress}
            {...register("adress", { required: true })}
            onChange={(e) => setAdress(e.target.value)}
          />
          {errors.adress?.type === "required" && (
            <p className="text-danger mt-2">adress is required</p>
          )}
        </CCol>
        <CCol md={5} className="position-relative">
          <CFormLabel htmlFor="validationTooltip06">Phone</CFormLabel>
          <CFormInput
            type="number"
            id="validationTooltip06"
            placeholder="Phone"
            value={phone}
            {...register("phone", {
              required: true,
              minLength: 11,
              maxLength: 11,
            })}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone?.type === "required" && (
            <p className="text-danger mt-2">phone is required</p>
          )}
          {errors.phone?.type === "minLength" && (
            <p className="text-danger mt-2">
              {" "}
              Number phone must be 11 characters long
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p className="text-danger mt-2">
              {" "}
              Number phone not than 11 characters long
            </p>
          )}
        </CCol>
        <CCol md={4} className="position-relative">
          <CFormLabel htmlFor="validationTooltip07">Roles</CFormLabel>
          <CFormSelect
            aria-label="Default select example"
            {...register("roleId", { required: true })}
            onChange={(e) => setRoleId(e.target.value)}
          >
            {dataRole &&
              dataRole.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </CFormSelect>
          {errors.roleId?.type === "required" && (
            <p className="text-danger mt-2">roleId is required</p>
          )}
        </CCol>

        <CModalFooter>
          <CButton color="secondary">
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              to="/admin/room"
            >
              Back
            </Link>
          </CButton>
          <CButton color="success" type="submit">
            Update
          </CButton>
        </CModalFooter>
      </CForm>
    </>
  );
};

connect(
  ({ username, password, fullName, phone, birtDate, roleId, adress }) => ({
    username,
    password,
    fullName,
    phone,
    birtDate,
    roleId,
    adress,
  }),
  UpdateDataUser
)(Profile);

export default Profile;
