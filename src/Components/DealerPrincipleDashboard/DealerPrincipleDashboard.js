import React from "react";
import "./DealerPrincipleDashboard.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MainPageCard from "../MainPageCards/MainPageCards";
function DealerPrincipleDashboard() {
  return (
    <div className="DealerPrincipleDashboard">
      <div className="DealerPrincipleDashboard_Children">
        <MainPageCard
          title="Diary Entries not followed up"
          Icon={MenuBookIcon}
        />
        <MainPageCard
          title="Diary Entries not followed up"
          Icon={MenuBookIcon}
        />
        <MainPageCard
          title="Diary Entries not followed up"
          Icon={MenuBookIcon}
        />
        <MainPageCard
          title="Diary Entries not followed up"
          Icon={MenuBookIcon}
        />
      </div>
      {/* <div className="DealerPrincipleDashboard_Children">
        <MenuBookIcon fontSize="large" />
      </div>
      <div className="DealerPrincipleDashboard_Children">
        Customer Archieve Requests
      </div>
      <div className="DealerPrincipleDashboard_Children">
        Marketing Lead Requests
      </div>
      <div className="DealerPrincipleDashboard_Children">
        Unopened Central Leads
      </div> */}
    </div>
  );
}

export default DealerPrincipleDashboard;
