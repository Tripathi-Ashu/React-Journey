import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Dashboard from "../Dashboard/Dashboard";

import Finance from "../pages/Finance";
import Network from "../pages/Network";
import Social from "../pages/Social";
import Inventory from "../pages/Inventory";

import Profile from "../pages/Profile";
import Company from "../pages/Company";
import Forum from "../pages/Forum";
import SupportivePages from "../pages/SupportivePages";

import Personalize from "../pages/Personalize";
import Components from "../pages/Components";
import Documentation from "../pages/Documentation";

import Email from "../pages/Email";
import Explorer from "../pages/Explorer";
import Calendar from "../pages/Calendar";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/supportive">
        <Route index element = {<SupportivePages />}></Route>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* PROTECTED ROUTES */}
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
       

        <Route path="/personalize" element={<Personalize />} />
        <Route path="/components" element={<Components />} />
        <Route path="/documentation" element={<Documentation />} />

        <Route path="/email" element={<Email />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;