

import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  return (
    <div>

      <h1>Product Details Page</h1>

      <h2>
        Product ID: {id}
      </h2>

      <p>
        You are viewing product with ID {id}
      </p>

    </div>
  );
}

export default ProductDetails;