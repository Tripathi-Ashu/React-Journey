import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { sidebarMenu } from "./sidebarConfig";

import "./Sidebar.css";

function Sidebar({ isOpen }) {

  // Ek hi state se sab submenu track ho jate hain: { profile: true, company: false, ... }
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside
      className={`sidebar ${
        isOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >

      <ul className="sidebar-menu">

        {sidebarMenu.map((item, index) => {

          // HEADING (jaise "Pages")
          if (item.type === "heading") {
            return (
              <li key={index} className="sidebar-heading">
                {item.label}
              </li>
            );
          }

          // SIMPLE LINK (jaise Dashboard, Finance, Personalize)
          if (item.type === "link") {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                  {item.label === "Personalize" && (
                    <span className="heart">♥</span>
                  )}
                </NavLink>
              </li>
            );
          }

          // SUBMENU (jaise Profile, Company, Forum, Supportive Pages)
          if (item.type === "submenu") {

            const isOpenMenu = !!openMenus[item.key];

            return (
              <li key={index}>

                <div
                  className={`sidebar-item profile-toggle ${
                    isOpenMenu ? "profile-open" : ""
                  }`}
                  onClick={() => toggleMenu(item.key)}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                  <i
                    className={`bi bi-chevron-${
                      isOpenMenu ? "up" : "down"
                    } arrow`}
                  ></i>
                </div>

                {isOpenMenu && (
                  <ul className="sidebar-submenu">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <NavLink
                          to={child.path}
                          className="sidebar-submenu-item"
                        >
                          <i className={`bi ${child.icon}`}></i>
                          <span>{child.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            );
          }

          return null;

        })}

      </ul>

    </aside>
  );
}

export default Sidebar;