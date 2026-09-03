import React, { useContext } from "react";

import { DashboardContext } from "../context/DashboardContext";

function WelcomeCard() {

  const { welcome } = useContext(DashboardContext);

  return (
    <div className="welcome-card">

      <div className="welcome-user">

        <div className="welcome-avatar">
          👩🏻
        </div>

        <div>
          <span>Welcome</span>
          <h3>{welcome.name}</h3>
        </div>

      </div>

      <div className="truck">
        🚚
      </div>

      <h1>{welcome.orders}</h1>

      <p>Order received</p>

      <div className="product-count">

        <i className="bi bi-bag-plus"></i>

        <div>
          <h4>{welcome.products}</h4>
          <span>Product available</span>
        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;