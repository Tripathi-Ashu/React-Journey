import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./Dashboard/Dashboard";

import Finance from "./pages/Finance";
import Network from "./pages/Network";
import Social from "./pages/Social";
import Inventory from "./pages/Inventory";

import Profile from "./pages/Profile";
import Company from "./pages/Company";
import Forum from "./pages/Forum";
import SupportivePages from "./pages/SupportivePages";

import Personalize from "./pages/Personalize";
import Components from "./pages/Components";
import Documentation from "./pages/Documentation";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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

      {/* PUBLIC ROUTES — bina login ke accessible */}
      <Route path="/supportive/sign-in" element={<SignIn />} />
      <Route path="/supportive/sign-up" element={<SignUp />} />

      {/* ROOT — dashboard pe redirect, but ProtectedRoute check karega login hai ya nahi */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* PROTECTED ROUTES — sirf login hone par accessible */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/network" element={<Network />} />
        <Route path="/social" element={<Social />} />
        <Route path="/inventory" element={<Inventory />} />

        <Route path="/profile/:type" element={<Profile />} />
        <Route path="/company/:type" element={<Company />} />

        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/details" element={<Forum />} />

        <Route path="/supportive/:type" element={<SupportivePages />} />

        <Route path="/personalize" element={<Personalize />} />
        <Route path="/components" element={<Components />} />
        <Route path="/documentation" element={<Documentation />} />

      </Route>

    </Routes>
  );
}

export default App;