import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
  ];

  const resourceItems = [
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/impact', label: 'Impact' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  const isResourceActive = resourceItems.some(item => location.pathname === item.path);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 header-container"
    >
      <nav ref={navRef} className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/dark-logo.png" alt="Schola Way" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4 md:py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`text-gray-700 hover:text-true-v-600 transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-true-v-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Resources Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center text-gray-700 hover:text-true-v-600 transition-colors duration-200 font-medium ${
                  isResourceActive ? 'text-true-v-600' : ''
                }`}
              >
                Resources
                <span className={`ml-1 text-xs transform transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}>▼</span>
              </button>
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={dropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-true-v-600 transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-true-v-600 bg-true-v-50' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </li>
            
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-true-v-600 text-white px-6 py-2 rounded-full hover:bg-true-v-700 transition-colors duration-200"
              >
                Get Started
              </Link>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-true-v-600 transition-colors"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              React.createElement(FaTimes as any, { className: "text-2xl" })
            ) : (
              React.createElement(FaBars as any, { className: "text-2xl" })
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  onClick={closeMenu}
                  className={`block text-gray-700 hover:text-true-v-600 transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-true-v-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Resources Section */}
            <li>
              <div className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">Resources</div>
              <div className="space-y-2 ml-4">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block text-gray-700 hover:text-true-v-600 transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-true-v-600' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
            
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-block bg-true-v-600 text-white px-6 py-2 rounded-full hover:bg-true-v-700 transition-colors duration-200"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;