import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { CartContext } from "./CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="border-b border-gray-200 w-full ">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                All Categories
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Deals
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Shop
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Our Contacts
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Stores
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6.36-6c-.54-.96-.96-1.96-1.28-3H6.92c-.32 1.04-.74 2.04-1.28 3-.64 1.14-2 2-3.64 2H22c-1.64 0-3-1.86-3.64-3zM12 4c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 18c-4.42 0-8-1.72-8-4v-4c0-2.28 2.68-4 6-4s6 1.72 6 4v4c0 2.28-3.58 4-8 4z" />
                </svg>
              </button>
              <button
                className="ml-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
                onClick={toggleCartModal}
              >
                <span className="sr-only">View cart</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4h10l1 5H6L7 4zm1 9h8v2H8v-2zm4 7a2 2 0 100-4 2 2 0 000 4zm-6-2a2 2 0 100-4 2 2 0 000 4zm14-9H6.6L5.7 6.3 5 4H2V2h3c.55 0 1 .45 1 1l.8 4H18l-1.1 5.6c-.2.8-.8 1.4-1.6 1.4H8.1l-.7-3H4.8l-.6-3H4V9H3v2h1l.7 3h9.7l1.1 5.6c.2.8.8 1.4 1.6 1.4h5.4v-2h-5.1L19 13zm-1.8-4h.2V9zM7 15h2v2H7v-2zm-2 0h2v2H5v-2zm10 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400" />
                )}
              </button>
              <CartModal isOpen={isCartOpen} onClose={toggleCartModal} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
