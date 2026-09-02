import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        
        <Route path="/dashboard" element={<DashboardLayout />}>

         
          <Route index element={<Dashboard />} />

          
          <Route path="profile" element={<Profile />} />

          
          <Route path="orders" element={<Orders />} />

          
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;