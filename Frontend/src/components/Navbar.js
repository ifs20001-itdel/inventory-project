import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/index.css";
import { GoHomeFill } from "react-icons/go";
import { FaDatabase, FaHistory } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
      
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Logout out successfully"
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    // Navbar
    <nav>
      <div className="drawer">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content m-7 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-outline text-white text-lg font-semibold"
          >
            <IoMdMenu />
          </label>
        </div>
        <div className="drawer-side">
  <label
    htmlFor="my-drawer-4"
    aria-label="close sidebar"
    className="drawer-overlay"
  ></label>
  <ul className="menu p-4 w-80 min-h-full text-base-content text-lg font-semibold bg-[#03001C]">
      {/* Sidebar content here */}
      <li>
        <Link to="/dashboard" className="text-white hover:text-gray-400 my-3 border-solid border-2 border-sky-800">
          <GoHomeFill /> Home
        </Link>
      </li>
      <li>
        <Link to="/product" className="text-white hover:text-gray-400 my-3 border-solid border-2 border-sky-800">
          <FaDatabase /> Products
        </Link>
      </li>
      <li>
        <Link to="/logs" className="text-white hover:text-gray-400 my-3 border-solid border-2 border-sky-800">
        <FaHistory /> Log Activity
        </Link>
      </li>
    <li>
      <a href="https://kelompok-sipaling.vercel.app/" className="text-white hover:text-gray-400 my-3 border-solid border-2 border-sky-800">
        <RiTeamFill /> Team
      </a>
    </li>
    <li>
      {/* Additional sidebar items go here */}
    </li>
    <li>
      {/* Add margin to create space */}
      <a href="#" className="text-white hover:text-gray-400 my-3 border-solid border-2 border-sky-800 mt-6" onClick={handleLogout} style={{ marginBottom: '20px' }}>
        <IoLogOut /> Logout
      </a>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
