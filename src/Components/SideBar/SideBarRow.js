import React from "react";
import "./SideBarRow.css";

function SideBarRow({ selected, title, Icon }) {
  return (
    <div className={`SideBarRow ${selected && "selected"}`}>
      <Icon className="SideBarRow_Icon" />
      <h3 className="SideBarRow_Title">{title}</h3>
      <hr />
      <hr />
    </div>
  );
}

export default SideBarRow;
