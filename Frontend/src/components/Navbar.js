import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    // Navbar
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-10 mr-2" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 justify-center">
          <li><Link to="/dashboard" className="text-white">Home</Link></li>
          <li><Link to="/product" className="text-white">Products</Link></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
          <li><a href="https://kelompok-sipaling.vercel.app/" className="text-white">Team</a></li>
        </ul>
        
        {/* Logout Link */}
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white" onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
