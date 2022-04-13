import React from "react";
import CIcon from "@coreui/icons-react";
<<<<<<< HEAD

import { cilUser, cilRoom, cibStorybook } from "@coreui/icons";

import { CNavItem } from "@coreui/react";

import { MdOutlineHomeRepairService } from "react-icons/md";
=======
import { cilDrop, cilSpeedometer } from "@coreui/icons";
import { CNavItem } from "@coreui/react";
>>>>>>> main

const _nav = [
  {
    component: CNavItem,
    name: "Rooms",
<<<<<<< HEAD
    to: "/admin",
    icon: <CIcon icon={cilRoom} customClassName="nav-icon" />,
=======
    to: "/admin/rooms",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
>>>>>>> main
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "User",
    to: "/admin/user",
<<<<<<< HEAD
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
=======
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
>>>>>>> main
  },
  {
    component: CNavItem,
    name: "Bookings",
    to: "/admin/bookings",
<<<<<<< HEAD
    icon: <CIcon icon={cibStorybook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Services",
    to: "/admin/services",
    icon: <MdOutlineHomeRepairService className="nav-icon" />,
  },
=======
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
>>>>>>> main
];

export default _nav;
