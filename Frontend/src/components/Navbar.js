import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate(); // Menggunakan useNavigate

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/auth/logout');
            // Menggunakan navigate untuk navigasi
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className='container'>

                <div className="navbar-brand">
                    <Link className="navbar-item" to="/dashboard">
                        <img src="/logo.png" alt="Logo" className='image is-64x64' />
                    </Link>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/dashboard">
                            Home
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* <a className="button is-primary">
                  <strong>Sign up</strong>
                </a> */}
                                <a onClick={Logout} className="button is-light">
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
