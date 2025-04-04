import React, { useState } from "react";

// Import icons (you can use any icon library you prefer)
// This example uses inline SVG for simplicity
const icons = {
  explore: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  ),
  lectures: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
      <polyline points="10 2 10 22"></polyline>
    </svg>
  ),
  assignment: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  ),
  report: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  ),
  announcement: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  ),
  logout: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  ),
};

const Sidebar = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState("Explore Courses");

  // Menu items data
  const menuItems = [
    { id: "explore", label: "Explore Courses", icon: icons.explore },
    { id: "lectures", label: "My Lectures", icon: icons.lectures },
    { id: "assignment", label: "Assignment", icon: icons.assignment },
    { id: "report", label: "Report", icon: icons.report },
    { id: "announcement", label: "Announcement", icon: icons.announcement },
  ];

  // Handle menu item click
  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white w-64">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wider text-center">DASHBOARD</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.label)}
                className={`flex items-center w-full px-4 py-3 transition-colors duration-200 ${
                  activeItem === item.label
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout at the bottom */}
      <div className="mt-auto border-t border-gray-800">
        <button
          onClick={() => handleItemClick("Logout")}
          className={`flex items-center w-full px-4 py-3 transition-colors duration-200 ${
            activeItem === "Logout"
              ? "bg-white text-black"
              : "text-white hover:bg-white hover:text-black"
          }`}
        >
          <span className="mr-3">{icons.logout}</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;