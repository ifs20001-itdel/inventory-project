import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AddProduct = () => {
  const [Version, setVersion] = useState("");
  const [Product, setProduct] = useState("");
  const [Stock, setStock] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Di sini, kita ambil dan cetak token setiap kali komponen dipasang
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    console.log(jwtDecode(token))


    // Jika Anda perlu melakukan sesuatu dengan token setiap kali halaman baru dimuat, Anda dapat melakukannya di sini.
  }, []); // Array kosong menandakan bahwa efek ini hanya berjalan saat komponen dipasang (seperti componentDidMount).

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      if (!token) {
        console.error("Token is missing or invalid");
        return;
      }

      await axios.post(
        "http://localhost:5000/products",
        {
          versionId: Version,
          productName: Product,
          qty: Stock,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/product");
    } catch (error) {
      console.error("Error:", error);
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
