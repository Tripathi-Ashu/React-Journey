

import React from "react";

function Finance() {

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">

        <div>
          <h2>Finance Dashboard</h2>
          <p>Finance related information</p>
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

        <h3>Finance</h3>

        <p>
          Finance dashboard content will appear here.
        </p>

      </div>

    </div>
  );
}

export default Finance;