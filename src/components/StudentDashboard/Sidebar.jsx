// Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass, faBook, faTasks, faChartLine,
    faBullhorn, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import "../../styles/sidebar.css";

const Sidebar = ({ sidebarOpen, handleMenuItemClick, activeMenuItem, menuItems, setSidebarOpen }) => {
  return (
    <>
     <div className="min-h-screen  ">
  {sidebarOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={() => setSidebarOpen(false)}
    ></div>
  )}

<div
  className={`w-308px bg-gray-900 text-white fixed md:sticky top-0 h-screen flex flex-col z-50 transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-56 md:left-0'}`}
>
  <div className="p-5 border-b border-gray-800">
    <h2 className="text-xl font-bold tracking-widest head-dash">DASHBOARD</h2>
  </div>

  <div className="py-2 flex-grow">
    {menuItems.map((item) => (
      <div
        key={item.name}
        className={`flex items-center px-5 py-4 cursor-pointer transition-colors ${
            activeMenuItem === item.name 
              ? 'bg-white text-black font-bold'  // Selected item (white background, black text)
              : 'bg-gray-900 text-white hover:bg-gray-800' // Default (dark background, white text)
          }`}
          
        onClick={() => handleMenuItemClick(item.name)}
      >
        <FontAwesomeIcon icon={item.icon} className="mr-3 text-lg" />
        <span className='element-name'>{item.name}</span>
      </div>
    ))}
  </div>

  <div className="border-t border-gray-800 px-5 py-4 flex items-center cursor-pointer">
    <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
    <span>Logout</span>
  </div>
</div>

</div>

    </>
  );
};

export default Sidebar;
