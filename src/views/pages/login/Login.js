import React from "react";
import axios from "axios";
import "./login.css";

const Login = () => {

  try {
    axios.get('https://reqres.in/api/users?page=2').then((res) => {
      console.log('Dữ liệu lấy về',res.data.data);
    })
    
   } catch (error) {
    console.log('Failed to fetch room: ', error);
   }
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
