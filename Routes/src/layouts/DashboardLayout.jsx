import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>

      <h1>Admin Dashboard</h1>

      <aside>

        <NavLink to="/dashboard">
          Dashboard Home
        </NavLink>

        <NavLink to="/dashboard/orders">
          Orders
        </NavLink>

        <NavLink to="/dashboard/profile">
          Profile
        </NavLink>

      </aside>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;