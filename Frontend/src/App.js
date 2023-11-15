import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Product from './components/crudProduct/Product';
import AddProduct from './components/crudProduct/AddProduct';
import EditProduct from './components/crudProduct/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute untuk halaman login */}
        <Route path="/" element={<Login />} />
        {/* Rute untuk halaman registrasi */}
        <Route path="/register" element={<Register />} />
        {/* Rute untuk dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Rute default, arahkan ke halaman login */}
        <Route index element={<Login />} />
        {/* Rute default, arahkan ke halaman product */}
        <Route path="/product" element={<Product />} />
        {/* Rute default, arahkan ke halaman AddProduct */}
        <Route path="product/add" element={<AddProduct />} />
        {/* Rute default, arahkan ke halaman AddProduct */}
        <Route path="product/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
