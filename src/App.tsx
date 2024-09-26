import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Tables from "./pages/Tables";
import RTL from "./pages/RTL";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/billing"
          element={<Billing />}
        />
        <Route
          path="/tables"
          element={<Tables />}
        />
        <Route
          path="/rtl"
          element={<RTL />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
