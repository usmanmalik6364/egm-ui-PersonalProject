import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import GroupIcon from "@material-ui/icons/Group";
import NotesIcon from "@material-ui/icons/Notes";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import SettingsIcon from "@material-ui/icons/Settings";
import ShowChartIcon from "@material-ui/icons/ShowChart";
function SideBar() {
  return (
    <div className="SideBar">
      <SideBarRow selected title="Home" Icon={HomeIcon} />
      <SideBarRow title="Customers" Icon={GroupIcon} />
      <SideBarRow title="Diary" Icon={NotesIcon} />
      <SideBarRow title="Reports" Icon={BarChartIcon} />
      <SideBarRow title="Reception" Icon={PhoneCallbackIcon} />
      <SideBarRow title="Tools" Icon={SettingsIcon} />
      <SideBarRow title="Leads" Icon={ShowChartIcon} />
    </div>
  );
}

export default SideBar;
