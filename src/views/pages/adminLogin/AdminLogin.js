import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector, connect } from "react-redux";
import AdminLoginAction from "src/Utils/store/action/adminLoginAction";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
=======

import "../login/login.css";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector, connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AdminLoginAction } from "src/Utils/store/action/adminLoginAction";
>>>>>>> 2ced03a38a08e00dd7293dcbf823faae0736e0b7

const AdminLogin = () => {
  const [username, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const isLoggIn = useSelector((state) => state.adminLogin.currentAdmin);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

<<<<<<< HEAD
  const handleOnSubmit = (data) => {
    dispatch(AdminLoginAction(data));
=======
  const handleOnSubmit = (data, e) => {
    dispatch(AdminLoginAction(data));
    setAdminName("");
    setPassWord("");
>>>>>>> 2ced03a38a08e00dd7293dcbf823faae0736e0b7
  };

  return (
    <>
<<<<<<< HEAD
      {isLoggIn ? <Navigate to="/admin" /> : []}
      <div className="bg-light min-vh-100 d-flex  flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit(handleOnSubmit)}>
                      <h1>Admin Panel</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-2">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          value={username || ""}
                          {...register("username", {
                            required: true,
                            pattern: /^[A-Za-z0-9]+$/i,
                          })}
                          onChange={(e) => setAdminName(e.target.value)}
                          // onBlur={(e) => setAdminName(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.username?.type === "required" && (
                        <span className="text-danger">
                          Username is required
                        </span>
                      )}
                      {errors.username?.type === "pattern" && (
                        <p className="text-danger  p-2">
                          {" "}
                          Username does not contain special characters
                        </p>
                      )}
                      <CInputGroup className="mb-3 mt-1">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          value={password}
                          autoComplete="current-password"
                          {...register("password", {
                            required: true,
                          })}
                          onChange={(e) => setPassWord(e.target.value)}
                          // onBlur={(e) => setPassWord(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.password?.type === "required" && (
                        <p className="text-danger">Password is required</p>
                      )}

                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
=======
      <div className="bg-dark min-vh-100 d-flex  flex-row align-items-center">
        {isLoggIn ? <Navigate to="/admin" /> : []}
        <section className="body-userlogin  min-vh-100">
          <div className="login-block">
            <h1>ADMIN PANEL</h1>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <input
                type="text"
                defaultValue={username}
                onChange={(e) => setAdminName(e.target.value)}
                {...register("username", {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/i,
                })}
                placeholder="Username"
                id="username"
              />
              {errors.username?.type === "required" && (
                <span className="text-danger pb-3">Username is required</span>
              )}
              {errors.username?.type === "pattern" && (
                <p className="text-danger  p-2">
                  {" "}
                  Username does not contain special characters
                </p>
              )}
              <input
                type="password"
                defaultValue={password}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder="Password"
                id="password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">Password is required</p>
              )}
              <button type="submit" className="btn-success mb-2 mt-3">
                Login
              </button>
            </form>

            {/* <Link to="/">Back home</Link> */}
          </div>
        </section>
>>>>>>> 2ced03a38a08e00dd7293dcbf823faae0736e0b7
      </div>
    </>
  );
};
connect(
  ({ username, password }) => ({
    username,
    password,
  }),
  AdminLoginAction
)(AdminLogin);
export default AdminLogin;
