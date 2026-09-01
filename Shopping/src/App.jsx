import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(
      cart.filter(item => item.id !== id)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Navbar cart={cart} />

      <main className="main-container">

        <ProductList
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />

      </main>
    </>
  );
}

export default App;