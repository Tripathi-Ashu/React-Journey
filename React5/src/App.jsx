import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./Dashboard/Dashboard";

import Finance from "./pages/Finance";
import Network from "./pages/Network";
import Social from "./pages/Social";
import Inventory from "./pages/Inventory";

function Professional() {
  return (
    <div>
      <h1>Professional Profile</h1>
      <p>This is Professional Profile page.</p>
    </div>
  );
}

function ProfileSocial() {
  return (
    <div>
      <h1>Social Profile</h1>
      <p>This is Social Profile page.</p>
    </div>
  );
}

function Analytical() {
  return (
    <div>
      <h1>Analytical Profile</h1>
      <p>This is Analytical Profile page.</p>
    </div>
  );
}

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="app">

      <Header onMenuClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} />

      <main
        className={`main-content ${
          isSidebarOpen
            ? "dashboard-shifted"
            : "dashboard-normal"
        }`}
      >
        <Outlet />
      </main>

    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />

      <Route element={<Layout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/finance"
          element={<Finance />}
        />

        <Route
          path="/network"
          element={<Network />}
        />

        <Route
          path="/social"
          element={<Social />}
        />

        <Route
          path="/inventory"
          element={<Inventory />}
        />

        <Route
          path="/profile/professional"
          element={<Professional />}
        />

        <Route
          path="/profile/social"
          element={<ProfileSocial />}
        />

        <Route
          path="/profile/analytical"
          element={<Analytical />}
        />

      </Route>

    </Routes>
  );
}

export default App;