

import { Link } from "react-router-dom";

function Products() {

  const products = [
    {
      id: 101,
      name: "iPhone",
      price: 70000
    },
    {
      id: 102,
      name: "Laptop",
      price: 60000
    },
    {
      id: 103,
      name: "Headphones",
      price: 5000
    },
    {
      id: 104,
      name: "Smart Watch",
      price: 3000
    }
  ];

  return (
    <div>

      <h1>Products Page</h1>

      {products.map((product) => (

        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px",
            width: "250px"
          }}
        >

          <h2>
            {product.name}
          </h2>

          <p>
            Price: ₹{product.price}
          </p>

          <Link
            to={`/products/${product.id}`}
          >
            View Details
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Products;