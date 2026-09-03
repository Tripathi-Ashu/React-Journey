import React, { createContext } from "react";

export const DashboardContext = createContext();

const dashboardData = {
  dailySales: {
    title: "Daily Sales",
    amount: "$ 2000.00",
    change: "$ 250",
    type: "up"
  },

  rawMaterial: {
    title: "Raw Material",
    amount: "$ 1506.00",
    change: "$ 250",
    type: "down"
  },

  productShortage: {
    title: "Product Shortage",
    amount: "1.05k",
    change: "2.15%",
    type: "down"
  },

  profitGain: {
    title: "Profit Gain",
    amount: "$ 4250.15",
    change: "1.25% - $ 450.00",
    type: "up"
  },

  gold: {
    title: "Gold",
    subtitle: "24 Carat",
    price: "$ 2053.19",
    change: "$250"
  },

  welcome: {
    name: "AdminUIUX",
    orders: 210,
    products: 209
  }
};

export function DashboardProvider({ children }) {
  return (
    <DashboardContext.Provider value={dashboardData}>
      {children}
    </DashboardContext.Provider>
  );
}