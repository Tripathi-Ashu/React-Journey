function Orders() {
    const orders = [
      {
        id: 101,
        product: "Laptop",
        price: "₹55,000",
        status: "Delivered"
      },
      {
        id: 102,
        product: "Mobile",
        price: "₹25,000",
        status: "Pending"
      },
      {
        id: 103,
        product: "Headphones",
        price: "₹2,000",
        status: "Delivered"
      }
    ];
  
    return (
      <div>
  
        <h1>Orders</h1>
  
        <table>
  
          <thead>
  
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
  
          </thead>
  
          <tbody>
  
            {orders.map((order) => (
              <tr key={order.id}>
  
                <td>#{order.id}</td>
  
                <td>{order.product}</td>
  
                <td>{order.price}</td>
  
                <td>{order.status}</td>
  
              </tr>
            ))}
  
          </tbody>
  
        </table>
  
      </div>
    );
  }
  
  export default Orders;