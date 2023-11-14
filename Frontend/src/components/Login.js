import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate(); // Menggunakan useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/login', {
                email: email,
                password: password
            });
            // Menggunakan navigate untuk navigasi
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={handleLogin} className="box">
                                {msg && <p className="has-text-centered has-text-danger">{msg}</p>}
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="input"
                                            placeholder="your email"
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="input"
                                            placeholder="********"
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
