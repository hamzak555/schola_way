import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import '../styles/HeaderNew.css';

const HeaderNew: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  }, [location]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsResourcesOpen(false);
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/services', label: 'Services' },
  ];

  const resourceItems = [
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/impact', label: 'Impact' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  const isResourceActive = resourceItems.some(item => location.pathname === item.path);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-4' 
            : 'bg-white/95 backdrop-blur-md py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center logo-link">
              <img 
                src="/dark-logo.png" 
                alt="Schola Way" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-9' : 'h-11'
                } w-auto`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-true-v-600'
                      : 'text-text-medium hover:text-true-v-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-true-v-600"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Resources Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  onKeyDown={handleKeyDown}
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    isResourceActive
                      ? 'text-true-v-600'
                      : 'text-text-medium hover:text-true-v-600'
                  }`}
                  aria-expanded={isResourcesOpen}
                  aria-haspopup="true"
                  aria-label="Resources menu"
                >
                  Resources
                  <span className={`ml-1 text-xs transform transition-transform duration-200 ${
                    isResourcesOpen ? 'rotate-180' : ''
                  }`}>▼</span>
                  {isResourceActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-true-v-600"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      role="menu"
                      aria-label="Resources submenu"
                    >
                      {resourceItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 hover:bg-gray-50 ${
                            location.pathname === item.path
                              ? 'text-true-v-600 bg-true-v-50'
                              : 'text-text-medium hover:text-true-v-600'
                          }`}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-6"
              >
                <Link
                  to="/contact"
                  className="relative inline-flex items-center px-6 py-2.5 bg-true-v-600 text-white font-medium rounded-full overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-true-v-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute w-full h-0.5 bg-text-medium transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`} />
                <span className={`absolute w-full h-0.5 bg-text-medium top-2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute w-full h-0.5 bg-text-medium transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`} />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {React.createElement(FaTimes as any, { className: "text-xl text-text-medium" })}
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                          location.pathname === item.path
                            ? 'bg-true-v-50 text-true-v-600'
                            : 'text-text-medium hover:bg-gray-50 hover:text-true-v-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Resources Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Resources
                    </div>
                    <div className="space-y-1">
                      {resourceItems.map((item, index) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2.5 ml-2 rounded-lg font-medium transition-all ${
                            location.pathname === item.path
                              ? 'bg-true-v-50 text-true-v-600'
                              : 'text-text-medium hover:bg-gray-50 hover:text-true-v-600'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + resourceItems.length) * 0.1 }}
                    className="pt-6"
                  >
                    <Link
                      to="/contact"
                      className="block w-full text-center px-6 py-3 bg-true-v-600 text-white font-medium rounded-full hover:bg-true-v-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className={`${isScrolled ? 'h-[73px]' : 'h-[88px]'}`} />
    </>
  );
};

export default HeaderNew;