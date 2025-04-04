import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font-sans relative">
      {/* Desktop Navigation - Exactly like the image */}
      <div className="flex justify-between items-center px-10 py-4">
        {/* Left menu items */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 font-medium">Courses</a>
          <a href="#" className="text-gray-700 font-medium">About us</a>
          <a href="#" className="text-gray-700 font-medium">Contact us</a>
        </div>
        
        {/* Right menu items */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center">
            <span className="mr-1">En</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">Join as Admin</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">Login</button>
        </div>
        
        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center w-full">
          {/* Mobile Logo/Branding */}
          <div className="text-indigo-600 font-bold text-lg">LearnX</div>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 px-6 absolute top-16 left-0 right-0 z-10 w-full">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 font-medium py-2 border-b border-gray-100">Courses</a>
            <a href="#" className="text-gray-700 font-medium py-2 border-b border-gray-100">About us</a>
            <a href="#" className="text-gray-700 font-medium py-2 border-b border-gray-100">Contact us</a>
            
            <div className="pt-2 flex items-center">
              <span className="mr-2 text-gray-700 font-medium">Language:</span>
              <button className="flex items-center">
                <span className="mr-1">En</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-3 pt-2">
              <button className="bg-indigo-600 text-white py-2 rounded-md text-sm font-medium w-full">Join as Admin</button>
              <button className="border border-gray-300 text-gray-700 py-2 rounded-md text-sm font-medium w-full">Login</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;