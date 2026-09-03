

import React from "react";

function Inventory() {

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">

        <div>
          <h2>Inventory Dashboard</h2>
          <p>Inventory related information</p>
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


      <div className="dashboard-card p-5">

        <h3>Inventory</h3>

        <p>
          Inventory dashboard content will appear here.
        </p>

      </div>

    </div>
  );
}

export default Inventory;