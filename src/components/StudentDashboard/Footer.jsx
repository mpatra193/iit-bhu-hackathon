import React, { useState } from 'react';
import { ChevronRight, Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  // State for mobile dropdown toggles
  const [openSection, setOpenSection] = useState(null);
  
  // Toggle section for mobile view
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between py-8">
          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-medium tracking-wider uppercase transform -rotate-90 md:rotate-0 mb-6 md:mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300">Home</a></li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">About Us</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Categories</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
            </ul>
          </div>

          {/* Terms Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Our Terms</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Refund Policy</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Cookie Policy</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Terms & Conditions</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Settings</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">My Learning</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-sm hover:text-gray-300">Become an Edu Partner</a>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;