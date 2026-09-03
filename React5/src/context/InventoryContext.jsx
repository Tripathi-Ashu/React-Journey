import React, { createContext } from "react";

export const InventoryContext = createContext();

const inventoryData = {
  products: [
    {
      id: "001",
      name: "Shoes",
      quantity: 520
    },
    {
      id: "002",
      name: "Clothing",
      quantity: 1020
    },
    {
      id: "003",
      name: "Pipes",
      quantity: 20
    },
    {
      id: "004",
      name: "Shoes",
      quantity: 520
    },
    {
      id: "005",
      name: "Clothing",
      quantity: 720
    }
  ],

  statistics: {
    income: "+15% vs yesterday",
    expense: "+20% vs yesterday",
    shortage: "+5% vs yesterday"
  }
};

export function InventoryProvider({ children }) {
  return (
    <InventoryContext.Provider value={inventoryData}>
      {children}
    </InventoryContext.Provider>
  );
}