import React from "react";
import "./login.css";

const Login = () => {
  return (
    <section className="body-userlogin">
      <div className="logo"></div>
      <div className="login-block">
        <h1>Login</h1>
        <input type="text" value="" placeholder="Username" id="username" />
        <input type="password" value="" placeholder="Password" id="password" />
        <button className="btn-primary">Submit</button>
      </div>
    </section>
  );
};

export default Login;
