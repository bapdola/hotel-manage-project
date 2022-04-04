import React from "react";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { CNavItem } from "@coreui/react";
import {
  MdOutlineHomeRepairService,
  MdOutlineMeetingRoom,
  MdStayCurrentPortrait,
} from "react-icons/md";
const _nav = [
  {
    component: CNavItem,
    name: "Rooms",
    to: "/admin/rooms",
    icon: <MdOutlineMeetingRoom className="nav-icon" />,
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
    icon: <MdStayCurrentPortrait className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Services",
    to: "/admin/services",
    icon: <MdOutlineHomeRepairService className="nav-icon" />,
  },
];

export default _nav;
