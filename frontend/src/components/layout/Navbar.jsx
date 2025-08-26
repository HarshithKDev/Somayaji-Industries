import React, { useState } from 'react';
import { User, LogOut, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/logo.png'; // Step 1: Import the logo image

// Navbar Component
const Navbar = ({ user, onLogin, onSignup, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Step 2: Replace the h1 text with an img tag for the logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img className="h-10 w-auto" src={logo} alt="Somayaji Industries Logo" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </button>
          </div>
          
          {/* Auth Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <User size={20} className="text-gray-600" />
                  <span className="text-gray-700">{user.username}</span>
                </button>
                
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-medium text-gray-900">{user.username}</p>
                      <p className="text-sm text-gray-500">{user.phone}</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          onLogout();
                          setIsProfileDropdownOpen(false);
                        }}
                        className="flex items-center space-x-2 w-full p-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={onLogin}>Login</Button>
                <Button onClick={onSignup}>Sign Up</Button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                About Us
              </button>
              
              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <div className="px-3 py-2">
                    <p className="font-medium text-gray-900">{user.username}</p>
                    <p className="text-sm text-gray-500">{user.phone}</p>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button variant="ghost" onClick={() => { onLogin(); setIsMobileMenuOpen(false); }} className="w-full">
                    Login
                  </Button>
                  <Button onClick={() => { onSignup(); setIsMobileMenuOpen(false); }} className="w-full">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;