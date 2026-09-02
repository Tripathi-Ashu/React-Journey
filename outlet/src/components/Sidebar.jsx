import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h1 className="logo">Admin</h1>

      <nav>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          📦 Orders
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ⚙️ Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;