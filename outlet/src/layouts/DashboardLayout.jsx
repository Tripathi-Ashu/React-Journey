import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="main-content">

        <header className="top-header">
          <h2>Admin Dashboard</h2>
          <span>Welcome 👋</span>
        </header>

        <section className="page-content">

          <Outlet />

        </section>

      </main>

    </div>
  );
}

export default DashboardLayout;