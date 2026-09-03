import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

function PurchaseHistory() {

  const { purchases } = useContext(UserContext);

  return (
    <div className="dashboard-card purchase-card">

      <h3>Purchase History</h3>

      <div className="purchase-table">

        <div className="purchase-header">

          <span>Business</span>
          <span>Total</span>
          <span>Status</span>
          <span>Price</span>
          <span>Action</span>

        </div>


        {purchases.map((item, index) => (

          <div className="purchase-row" key={index}>

            <div className="business-info">

              <div className="business-icon">
                <i className="bi bi-building"></i>
              </div>

              <div>
                <strong>{item.business}</strong>
                <span>{item.location}</span>
              </div>

            </div>

            <div>
              <strong>{item.total}</strong>
              <span>Tickets</span>
            </div>

            <div>

              <span
                className={`status ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>

            </div>

            <strong>{item.price}</strong>

            <button className="delete-btn">
              <i className="bi bi-trash"></i>
            </button>

          </div>

        ))}

      </div>

      <div className="pagination-area">

        <span>Showing 1 to 3 of 3 entries</span>

        <div>
          «　‹　<b>1</b>　›　»
        </div>

      </div>

    </div>
  );
}

export default PurchaseHistory;