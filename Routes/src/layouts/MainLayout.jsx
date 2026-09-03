import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <h1>MiniShop</h1>

        <nav>

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/login">
            Login
          </NavLink>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;