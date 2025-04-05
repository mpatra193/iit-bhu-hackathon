// Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <button className="text-xl md:hidden mr-4" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="relative ml-2 max-w-md w-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative mr-5 cursor-pointer">
          <FontAwesomeIcon icon={faBell} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
        </div>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="ml-2 text-sm text-gray-600 hidden md:block">User_name</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;