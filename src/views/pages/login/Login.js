import React from "react";
import "./login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, connect } from "react-redux";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const handleOnSubmit = (data) => {
    dispatch();
  };

  return (
    <section className="body-userlogin">
      <div className="logo"></div>
      <div className="login-block">
        <h1>Login</h1>
        <input
          type="text"
          defaultValue={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          id="username"
        />
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <button className="btn-primary">Submit</button>
      </div>
    </section>
  );
};

export default Login;
