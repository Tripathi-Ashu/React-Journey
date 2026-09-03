import React, { useContext } from "react";

import { DashboardContext } from "../context/DashboardContext";

function GoldCard() {

  const { gold } = useContext(DashboardContext);

  return (
    <div className="dashboard-card gold-card">

      <h3>{gold.title}</h3>

      <p>{gold.subtitle}</p>

      <div className="gold-image">
        🪙
      </div>

      <h1>{gold.price}</h1>

      <span className="change-up">
        <i className="bi bi-caret-up-fill"></i>
        {" "}{gold.change}
      </span>

      <div className="gold-footer">

        <strong>Cleared Stock</strong>

        <span>
          <b>+15%</b> vs last month
        </span>

      </div>

    </div>
  );
}

export default GoldCard;