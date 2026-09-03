import React, { useContext } from "react";

import { DashboardContext } from "../context/DashboardContext";

function SummaryCards() {

  const data = useContext(DashboardContext);

  const cards = [
    {
      ...data.dailySales,
      icon: "bi-box-seam",
      color: "blue"
    },
    {
      ...data.rawMaterial,
      icon: "bi-gear",
      color: "orange"
    },
    {
      ...data.productShortage,
      icon: "bi-basket",
      color: "pink"
    },
    {
      ...data.profitGain,
      icon: "bi-bank",
      color: "green"
    }
  ];

  return (
    <div className="row g-4">

      {cards.map((card, index) => (

        <div className="col-xl-3 col-lg-6 col-md-6" key={index}>

          <div className="summary-card">

            <div className={`summary-icon ${card.color}`}>

              <i className={`bi ${card.icon}`}></i>

            </div>

            <div>

              <h6>{card.title}</h6>

              <h3>{card.amount}</h3>

              <span
                className={
                  card.type === "up"
                    ? "change-up"
                    : "change-down"
                }
              >

                <i
                  className={
                    card.type === "up"
                      ? "bi bi-caret-up-fill"
                      : "bi bi-caret-down-fill"
                  }
                ></i>

                {" "}{card.change}

              </span>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default SummaryCards;