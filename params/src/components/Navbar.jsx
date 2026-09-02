import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#222"
      }}
    >
      <Link
        to="/"
        style={{ color: "white" }}
      >
        Home
      </Link>

      <Link
        to="/products"
        style={{ color: "white" }}
      >
        Products
      </Link>
    </nav>
  );
}

export default Navbar;