import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute untuk halaman login */}
        <Route path="/" element={<Login />} />
        {/* Rute untuk halaman registrasi */}
        <Route path="/register" element={<Register />} />
        {/* Rute untuk dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Rute default, arahkan ke halaman login */}
        <Route index element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
