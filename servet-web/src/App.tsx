import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Programs from './pages/Programs/Programs';
import Services from './pages/Services/Services';
import Impact from './pages/Impact/Impact';
import Partnerships from './pages/Partnerships/Partnerships';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="services" element={<Services />} />
            <Route path="impact" element={<Impact />} />
            <Route path="partnerships" element={<Partnerships />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;