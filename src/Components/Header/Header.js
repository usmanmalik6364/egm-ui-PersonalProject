import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import BarChartIcon from "@material-ui/icons/BarChart";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import Avatar from "@material-ui/core/Avatar";
import EgmLogo from "../../egmlogo.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className=" Header_MenuIcon">
        <MenuIcon className="Header_IconsColor" />
        <img className="Header__Logo" src={EgmLogo} />
        <div className="Header_ReportIcons">
          <BarChartIcon className="Header_ReportsIcon" />
          <h3 className="Header_Report">Reports</h3>
          <ArrowDropDownIcon className="Header_IconsColor" />
        </div>
      </div>

      <div className="Header_Icons">
        <div className="Header_Search">
          <input type="text" placeholder="Search Customers" />
          <SearchIcon className="Header_InputButton" />
        </div>
        <NotificationsNoneIcon className="Header_IconsColor" />
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C5603AQFbUcyCCsrc4g/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=ER1armCqWjJBTocNltpGLPXt63NHyg32brIJq82q3Sc"
          className="Header_IconsColor"
        />
      </div>
    </div>
  );
}

export default Header;
