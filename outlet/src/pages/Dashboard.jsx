function Dashboard() {
    return (
      <div>
  
        <h1>Dashboard</h1>
  
        <p>
          Welcome to your Admin Dashboard.
        </p>
  
        <div className="cards">
  
          <div className="card">
            <h3>Total Users</h3>
            <h2>1,250</h2>
          </div>
  
          <div className="card">
            <h3>Total Orders</h3>
            <h2>540</h2>
          </div>
  
          <div className="card">
            <h3>Total Revenue</h3>
            <h2>₹85,000</h2>
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default Dashboard;