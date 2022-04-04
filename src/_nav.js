import React from "react";
import CIcon from "@coreui/icons-react";

import { cilUser, cilRoom, cibStorybook } from "@coreui/icons";

import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Rooms",
    to: "/admin/rooms",
    icon: <CIcon icon={cilRoom} customClassName="nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    component: CNavItem,
    name: "User",
    to: "/admin/user",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Bookings",
    to: "/admin/bookings",
    icon: <CIcon icon={cibStorybook} customClassName="nav-icon" />,
  },
];

export default _nav;
