import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

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

    const fetchProductById = async (id) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                return;
            }

            const response = await axios.get(`http://localhost:5000/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setSelectedProduct(response.data);
        } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const showProductDetails = (product) => {
        setSelectedProduct(product);
    };

    return (
        <section>
            <Navbar />
            <div className="columns mt-5 is-centered">
                <div className="column mx-8 mb-4">
                    {/* Displaying the list of products in a table */}
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Version</th>
                                <th>User</th>
                                <th>Stock</th>
                                <th>Amount</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name_product}</td>
                                    <td>{product.name_version}</td>
                                    <td>{product.name_user}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.createdAt}</td>
                                    <td>
                                        <button onClick={() => showProductDetails(product)} className="button is-info">Details</button>
                                        <button onClick={() => deleteProduct(product.id)} className="button is-danger">Delete</button>
                                        <Link to={`edit/${product.id}`} className="button is-info">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Code Untuk menampilkan Detail nya */}
                    {selectedProduct && (
                        <div>
                            <h2>Product Details</h2>
                            <p>Version: {selectedProduct.name_version}</p>
                            <p>User: {selectedProduct.name_user}</p>
                            <p>Stock: {selectedProduct.stock}</p>
                            <p>Amount: {selectedProduct.amount}</p>
                            <p>Created At: {selectedProduct.createdAt}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Product;
