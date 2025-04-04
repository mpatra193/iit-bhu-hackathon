import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm leading-relaxed mb-6">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Our Company */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">About us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Categories</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Contact us</a></li>
            </ul>
          </div>

          {/* Our Terms */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase mb-4">Our Terms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Refund Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Settings</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">My Learning</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors duration-300">Become an Edu Partner</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <p className="text-sm text-center">© 2025 - Made with pmp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;