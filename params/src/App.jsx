
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails';

function App() {
    

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<Products></Products>}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
