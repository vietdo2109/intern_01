import './App.css';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import Billing from './pages/billing';
import Tables from './pages/tables';
import RTL from './pages/formPlayGround';

import { Navigate } from 'react-router-dom';
import TodoList from './pages/todoList';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/rtl" element={<RTL />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
