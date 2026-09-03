import React, { useContext } from "react";

import { InventoryContext } from "../context/InventoryContext";

function InventoryStatistics() {

  const { products, statistics } = useContext(InventoryContext);

  return (
    <div className="dashboard-card inventory-card">

      <div className="card-heading">

        <h3>Finance Statistics</h3>

        <p>Income and expense statistic data view</p>

      </div>


      <div className="inventory-table">

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.quantity}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      <div className="finance-tabs">

        <div>
          <strong>Income</strong>
          <span>{statistics.income}</span>
        </div>

        <div>
          <strong>Expense</strong>
          <span>{statistics.expense}</span>
        </div>

        <div className="active">
          <strong>Stock Shortage</strong>
          <span>{statistics.shortage}</span>
        </div>

      </div>

    </div>
  );
}

export default InventoryStatistics;