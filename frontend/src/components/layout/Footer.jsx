import React from 'react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Somayaji Industries</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
Your trusted fabrication partner, delivering quality, innovation, and service you can depend on.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-indigo-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Custom Fabrication</span></li>
              <li><span className="text-gray-400">Metal Work</span></li>
              <li><span className="text-gray-400">Wooden Furniture</span></li>
              <li><span className="text-gray-400">Industrial Solutions</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Somayaji Industries. All rights reserved. | The heart of our craft is in Mangaluru, Karnataka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;