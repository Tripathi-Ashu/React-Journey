function Settings() {
    return (
      <div>
  
        <h1>Settings</h1>
  
        <div className="settings-card">
  
          <label>
            Username
          </label>
  
          <input
            type="text"
            placeholder="Enter username"
          />
  
          <label>
            Email
          </label>
  
          <input
            type="email"
            placeholder="Enter email"
          />
  
          <button>
            Save Settings
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default Settings;