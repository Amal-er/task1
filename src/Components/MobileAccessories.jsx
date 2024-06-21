import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import gopro from "../assets/gopro.jpg";
import powerbank from "../assets/powerbank.jpg";
import universal from "../assets/universal.jpg";
import headphone from "../assets/headphone.png";
import { CartContext } from "./CartContext";

const MobileAccessories = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const products = [
    {
      id: 1,
      name: "GadPro Flash Series Two-for-Three Data Cable",
      price: "₹499.00",
      image: gopro,
    },
    {
      id: 2,
      name: "GadPro Flash Series Two-for-Three Data Cable",
      price: "₹1,349.00",
      image: powerbank,
    },
    {
      id: 3,
      name: "Dr Vaku Clear Bolt 10000mah Powerbank",
      price: "₹399.00",
      image: universal,
    },
    {
      id: 4,
      name: "JBL Tune 205BT by Harmon wireless Earbud",
      price: "₹1,999.00",
      image: headphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full py-6 flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-white rounded-lg shadow">
          <div className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Mobile Accessories</h2>
              <div className="flex space-x-2">
                <button className="bg-purple-500 text-white py-2 px-3 md:px-4 rounded hover:bg-purple-700">
                  9
                </button>
                <button className="bg-purple-500 text-white py-2 px-3 md:px-4 rounded hover:bg-purple-700">
                  12
                </button>
                <button className="bg-purple-500 text-white py-2 px-3 md:px-4 rounded hover:bg-purple-700">
                  18
                </button>
                <button className="bg-purple-500 text-white py-2 px-3 md:px-4 rounded hover:bg-purple-700">
                  24
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-4">{product.price}</p>
                  <button
                    className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccessories;
