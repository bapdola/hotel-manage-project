import React from "react";
import CIcon from "@coreui/icons-react";
import { cilDrop, cilSpeedometer } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Rooms",
    to: "/admin/rooms",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "User",
    to: "/admin/user",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Bookings",
    to: "/admin/bookings",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
];

export default _nav;
