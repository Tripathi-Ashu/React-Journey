
import React from "react";

function Network() {

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">

        <div>
          <h2>Network Dashboard</h2>
          <p>Network related information</p>
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

        <h3>Network</h3>

        <p>
          Network dashboard content will appear here.
        </p>

      </div>

    </div>
  );
}

export default Network;