import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="app">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main
        className={`main-content ${
          isSidebarOpen ? "dashboard-shifted" : "dashboard-normal"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;