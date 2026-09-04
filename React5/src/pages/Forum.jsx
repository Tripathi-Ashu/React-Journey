import React from "react";
import { useLocation } from "react-router-dom";

function Forum() {

  const location = useLocation();

  const isDetails = location.pathname === "/forum/details";
  const isFourm = location.pathname === '/fourm';

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">
        <div>
          <h2>{isDetails ? "Forum Details" : "Forum"}</h2>
          <p>
            {isDetails
              ? "Forum details related information"
              : "Forum related information"}
          </p>
        </div>
      </div>

      <div className="dashboard-card p-5">
        <h3>{isDetails ? "Forum Details" : "Forum"}</h3>
        <p>
          {isDetails
            ? "Forum details content will appear here."
            : "Forum content will appear here."}
        </p>
      </div>

    </div>
  );
}

export default Forum;