import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Course from './pages/Course';
import Faculty from './pages/Faculty';
import Placement from './pages/Placement';
import Result from './pages/Result';
import Download from './pages/Download';
import Notice from './pages/Notice';
import BBA from './pages/BBA';
import BCA from './pages/BCA';
import Contact from './pages/Contact';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HeaderTop from './layout/HeaderTop';
import ScrollToTop from './components/ScrollToTop';
import EventGallery from './pages/EventGallery';
import InfraGallery from './pages/InfraGallery';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <HeaderTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/infra-gallery" element={<InfraGallery />} />
          <Route path="/event-gallery" element={<EventGallery />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/result" element={<Result />} />
          <Route path="/download" element={<Download />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/bba" element={<BBA />} />
          <Route path="/bca" element={<BCA />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
