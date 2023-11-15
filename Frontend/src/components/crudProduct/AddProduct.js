import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [Version, setVersion] = useState("");
  const [User, setUser] = useState("");
  const [Product, setProduct] = useState("");
  const [Stock, setStock] = useState("");
  const [Amount, setAmount] = useState("");
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing or invalid
        console.error('Token is missing or invalid');
        return;
      }
  
      await axios.post("http://localhost:5000/products", {
        name_version: Version,
        name_user: User,
        name_product: Product,
        stock: Stock,
        amount: Amount,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="max-w-xl mx-auto mt-5">
      <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4" onSubmit={createProduct}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
            Version
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="version"
            type="text"
            placeholder="Version"
            value={Version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
            User
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user"
            type="text"
            placeholder="Name User"
            value={User}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
            Product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            placeholder="Product"
            value={Product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="text"
            placeholder="Stock"
            value={Stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="text"
            placeholder="Amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
