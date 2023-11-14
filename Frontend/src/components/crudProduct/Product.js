import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                return;
            }

            const response = await axios.get("http://localhost:5000/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <section>
            <Navbar />
            <div className="columns mt-5 is-centered">
                <div className="column is-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Version</th>
                                <th className="px-4 py-2">User</th>
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Stock</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Created At</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{product.name_version}</td>
                                    <td className="px-4 py-2">{product.name_user}</td>
                                    <td className="px-4 py-2">{product.name_product}</td>
                                    <td className="px-4 py-2">{product.stock}</td>
                                    <td className="px-4 py-2">{product.amount}</td>
                                    <td className="px-4 py-2">{product.createdAt}</td>
                                    <td className="px-4 py-2">
                                        <button className="button is-danger is-small px-3 py-1">Delete</button>
                                        <button className="button is-success is-small px-3 py-1 ml-3">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Product;
