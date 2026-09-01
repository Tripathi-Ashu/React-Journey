import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {

  return (
    <CartProvider>

      <Navbar />

      <main className="main-container">

        <ProductList />

        <Cart />

      </main>

    </CartProvider>
  );
}

export default App;