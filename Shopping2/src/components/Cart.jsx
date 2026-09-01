import { useCart } from "../context/CartContext";
import "../css/Cart.css";

function Cart() {

  const {
    cart,
    removeFromCart,
    clearCart
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="cart-section">

      <div className="cart-header">
        <h2>Your Cart</h2>
        <span>{cart.length} Items</span>
      </div>

      {
        cart.length === 0 ? (

          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h3>Cart is Empty</h3>
            <p>Add some products to your cart.</p>
          </div>

        ) : (

          <>
            <div className="cart-items">

              {
                cart.map(item => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div>
                      <h3>{item.name}</h3>
                      <p>₹{item.price}</p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                ))
              }

            </div>

            <div className="cart-footer">

              <div className="total-row">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button
                className="clear-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>

            </div>
          </>

        )
      }

    </section>
  );
}

export default Cart;