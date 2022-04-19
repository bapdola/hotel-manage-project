import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../images/logo.svg";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { AdminLogut } from "src/Utils/store/action/adminLoginAction";
import { useSelector, useDispatch } from "react-redux";
import cookie from "react-cookies";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggIn = useSelector((state) => state.adminLogin.currentAdmin);
  let isAdminRoot = cookie.load("ADMIN_DATA") || {};

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(AdminLogut());
  };

  console.log("check login", isAdminRoot.Token);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            {isAdminRoot.Token ? (
              <Link to="/login" onClick={handleLogout}>
                <BiLogOut size="25" /> Logout
              </Link>
            ) : (
              <Link to="/login">
                <VscAccount size="27" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
