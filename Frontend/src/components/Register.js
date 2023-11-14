import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate(); // Menggunakan useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', {
                name: name,
                role: role,
                email: email,
                password: password
            });
            // Menggunakan navigate untuk navigasi
            navigate("/");
        } catch (error) {
            console.error(error);
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <section className="hero has-background-grey-light is-fullheight is-fullwidth">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-4-desktop">
                                <form onSubmit={handleRegister} className="box">
                                    <p className='has-text-centered'>{msg}</p>
                                    <div className="field mt-5">
                                        <label className="label">Name</label>
                                        <div className="controls">
                                            <input
                                                type="text"
                                                className="input"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Role</label>
                                        <div className="controls">
                                            <input
                                                type="text"
                                                className="input"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                placeholder="your role"
                                            />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Email</label>
                                        <div className="controls">
                                            <input
                                                type="text"
                                                className="input"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Password</label>
                                        <div className="controls">
                                            <input
                                                type="password"
                                                className="input"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="********"
                                            />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <button className="button is-success is-fullwidth">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
