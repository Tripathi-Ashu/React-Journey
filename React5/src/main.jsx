import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { DashboardProvider } from "./context/DashboardContext";
import { InventoryProvider } from "./context/InventoryContext";
import { UserProvider } from "./context/UserContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <DashboardProvider>
        <InventoryProvider>
          <UserProvider>

            <App />

          </UserProvider>
        </InventoryProvider>
      </DashboardProvider>

    </BrowserRouter>

  </React.StrictMode>
);