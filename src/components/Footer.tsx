import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'info@scholaway.com' },
    { icon: FaPhone, text: '+1 (561) 668-9325' },
    { icon: FaMapMarkerAlt, text: '1717 N. Bayshore Drive, Suite 4134, Miami, FL 33132, USA' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-8">
      <div className="container mx-auto px-6 pt-36 pb-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <img src="/dark-logo.png" alt="Schola Way" className="h-10 w-auto mb-4" />
            <p className="text-text-medium max-w-sm">
              Your trusted partner in navigating educational pathways and making confident decisions for the future.
            </p>
          </motion.div>

          {/* Quick Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <h4 className="font-semibold text-text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-text-medium hover:text-true-v-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Mobile Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:hidden"
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center font-semibold text-text-dark mb-4 group"
            >
              <span>Menu</span>
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                {React.createElement(IoChevronDown as any, { className: "text-text-medium group-hover:text-true-v-600 transition-colors" })}
              </motion.div>
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 overflow-hidden"
                >
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="text-text-medium hover:text-true-v-600 transition-colors block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text-dark mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center text-text-medium">
                    {React.createElement(Icon as any, { className: "text-true-v-600 mr-3 text-sm" })}
                    <span className="text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 py-8 flex items-center justify-start md:justify-center"
        >
          <p className="text-text-medium text-sm text-left md:text-center">
            &copy; {currentYear} Schola Way. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;