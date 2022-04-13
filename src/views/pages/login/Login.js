import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
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
