import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderNew from './HeaderNew';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import ScrollProgress from './ScrollProgress';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="layout min-h-screen flex flex-col">
      <ScrollToTopOnMount />
      <ScrollProgress />
      <HeaderNew />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;