import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-64">
      <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
      <ul className="space-y-2 mb-6 text-left">
        <li>
          <a href="#" className="text-gray-500">
            Extension
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500">
            Mobile Phone Cases
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500">
            Power Banks
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500">
            Headsets
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500">
            Charger And Data Cable
          </a>
        </li>
      </ul>
      <h3 className="text-lg font-semibold mb-4">Filter By Price</h3>
      <div className="flex flex-col space-y-2">
        <input type="range" min="399" max="11100" className="slider" />
        <div className="flex justify-between">
          <span>₹399</span>
          <span>₹11100</span>
        </div>
        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 mt-4">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
