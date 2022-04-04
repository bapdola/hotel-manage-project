import React from "react";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { sygnet } from "src/assets/brand/sygnet";

import logo from "../images/logo.svg";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  return (
    <CSidebar position="fixed">
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={logo} width={200} alt="Beach Resort" />

        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
