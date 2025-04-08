// Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass, faBook, faTasks, faChartLine,
  faBullhorn, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sidebarOpen, handleMenuItemClick, activeMenuItem, menuItems, setSidebarOpen }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`w-56 bg-gray-900 text-white fixed md:static h-150 z-50 transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-56 md:left-0'}`}
      >
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-xl font-bold tracking-widest">DASHBOARD</h2>
        </div>

        <div className="py-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center px-5 py-4 cursor-pointer transition-colors hover:bg-gray-800 ${activeMenuItem === item.name ? 'bg-gray-800 border-l-4 border-purple-500' : ''}`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-3 text-lg" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-800 px-5 py-4 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
