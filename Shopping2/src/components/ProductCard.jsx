import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-icon">
        🛍️
      </div>

      <h3>{product.name}</h3>

      <p className="product-price">
        ₹{product.price}
      </p>

      <button
        className="add-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;