import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">Cart</h2>
          <button onClick={onClose} className="text-red-500">
            X
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
