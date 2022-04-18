import React from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilLockLocked, cilSettings, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useDispatch } from "react-redux";
import { AdminLogut } from "src/Utils/store/action/adminLoginAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import avatar8 from "./../../assets/images/avatars/8.jpg";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();

  const handleLogOutAd = () => {
    dispatch(AdminLogut());
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        Hi!!: <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="admin/login" onClick={handleLogOutAd}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
