import React from "react";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
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
          element={<Profile />}
        />
        <Route
          path="/tables"
          element={<Profile />}
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