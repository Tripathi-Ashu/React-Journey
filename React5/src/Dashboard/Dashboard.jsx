

import React from "react";

import SummaryCards from "./SummaryCards";
import InventoryStatistics from "./InventoryStatistics";
import GoldCard from "./GoldCard";
import WelcomeCard from "./WelcomeCard";
import ProfileCard from "./ProfileCard";
import PurchaseHistory from "./PurchaseHistory";
import TopUsers from "./TopUsers";
import RecentComments from "./RecentComments";

import "./Dashboard.css";

function Dashboard() {

  return (
    <div className="dashboard-container">

     {/* header section */}
      <div className="dashboard-heading">

        <div>
          <h2>My Dashboard</h2>
          <p>This is personal intranet</p>
        </div>

        <div className="dashboard-actions">

          <button>
            19/05/2025 - 25/06/2025
          </button>

          <i className="bi bi-calendar3"></i>
          <i className="bi bi-filter"></i>
          <i className="bi bi-life-preserver"></i>

        </div>

      </div>
     
      <SummaryCards />
      
      <div className="row g-4 mt-1">

        <div className="col-xl-6 col-lg-6">
          <InventoryStatistics />
        </div>

        <div className="col-xl-3 col-lg-3">
          <GoldCard />
        </div>

        <div className="col-xl-3 col-lg-3">
          <WelcomeCard />
        </div>

      </div>

      <div className="row g-4 mt-1">

        <div className="col-xl-4 col-lg-5">
          <ProfileCard />
          <RecentComments />
        </div>

        <div className="col-xl-8 col-lg-7">
          <PurchaseHistory />
          <TopUsers />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
