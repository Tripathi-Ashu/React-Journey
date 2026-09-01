import { useCart } from "../context/CartContext";
import '../css/Navbar.css'
function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="navbar">

      <h1 className="shop-logo">
        My Shop
      </h1>

      <div className="cart-count">
        🛒 Cart: {cart.length}
      </div>

    </nav>
  );
}

export default Navbar;