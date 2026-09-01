import products from "../data/products";
import ProductCard from "./ProductCard";
import "../css/ProductList.css";

function ProductList({ addToCart }) {

  return (
    <section className="products-section">

      <h2 className="section-title">
        Products
      </h2>

      <div className="products-grid">

        {
          products.map(product => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          ))
        }

      </div>

    </section>
  );
}

export default ProductList;