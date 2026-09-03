import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({ isOpen }) {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
  };

  return (
    <aside
      className={`sidebar ${
        isOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >

      <ul className="sidebar-menu">

        {/* DASHBOARD */}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-house-door"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>


        {/* FINANCE */}
        <li>
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-wallet2"></i>
            <span>Finance</span>
          </NavLink>
        </li>


        {/* NETWORK */}
        <li>
          <NavLink
            to="/network"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-grid"></i>
            <span>Network</span>
          </NavLink>
        </li>


        {/* SOCIAL */}
        <li>
          <NavLink
            to="/social"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-bullseye"></i>
            <span>Social</span>
          </NavLink>
        </li>


        {/* INVENTORY */}
        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-box"></i>
            <span>Inventory</span>
          </NavLink>
        </li>


        {/* PAGE HEADING */}
        <li className="sidebar-heading">
          Pages
        </li>


        {/* PROFILE */}
        <li>

          <div
            className={`sidebar-item profile-toggle ${
              isProfileOpen ? "profile-open" : ""
            }`}
            onClick={toggleProfile}
          >

            <i className="bi bi-person-circle"></i>

            <span>Profile</span>

            <i
              className={`bi bi-chevron-${
                isProfileOpen ? "up" : "down"
              } arrow`}
            ></i>

          </div>


          {/* PROFILE SUBMENU */}
          {isProfileOpen && (

            <ul className="profile-submenu">

             


              <li>
                <NavLink
                  to="/profile/social"
                  className="profile-submenu-item"
                >
                  <i className="bi bi-people"></i>
                  <span>Social</span>
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/profile/analytical"
                  className="profile-submenu-item"
                >
                  <i className="bi bi-bar-chart"></i>
                  <span>Analytical</span>
                </NavLink>
              </li>

            </ul>

          )}

        </li>


        {/* COMPANY */}
        <li className="sidebar-item">
          <i className="bi bi-building"></i>
          <span>Company</span>
          <i className="bi bi-chevron-down arrow"></i>
        </li>


        {/* FORUM */}
        <li className="sidebar-item">
          <i className="bi bi-question-circle"></i>
          <span>Forum</span>
          <i className="bi bi-chevron-down arrow"></i>
        </li>


        {/* SUPPORTIVE PAGES */}
        <li className="sidebar-item">
          <i className="bi bi-window-stack"></i>
          <span>Supportive Pages</span>
          <i className="bi bi-chevron-down arrow"></i>
        </li>


        {/* PERSONALIZE */}
        <li className="sidebar-item">
          <i className="bi bi-palette"></i>
          <span>Personalize</span>
          <span className="heart">♥</span>
        </li>


        {/* COMPONENTS */}
        <li className="sidebar-item">
          <i className="bi bi-cpu"></i>
          <span>Components</span>
        </li>


        {/* DOCUMENTATION */}
        <li className="sidebar-item">
          <i className="bi bi-journal-code"></i>
          <span>Documentation</span>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;