import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavLink from './Resources/components/nav-link';
import { Bars3Icon } from '@heroicons/react/16/solid';
import About from './Resources/pages/about';
import Home from './Resources/pages/home';
import Contact from './Resources/pages/contact';
import Gallery from './Resources/pages/gallery';
import './Resources/style/navbar-style.css'
import './App.css';

function AppContent() {
  const [isOpen, setIsOpen] = useState(false);
  const viewportWidth = window.innerWidth;
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='w-full' style={{ overflow: "hidden" }}>
      {viewportWidth < 768 ? (
        <header className="flex flex-col justify-between items-center p-16 bg-black w-full fixed">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="text-primary">
              <h2>ArtExplorer</h2>
            </div>
            <a className="text-primary" onClick={toggleNavbar}>
              <Bars3Icon className="h-24 w-24 text-primary" />
            </a>
          </div>

          <div className={`nav-transition ${isOpen ? 'nav-open' : 'nav-closed'}`}>
            <nav className="flex flex-col gap-8 items-center mt-4">
              <NavLink label="home" link="/" />
              <NavLink label="contact" link="/contact" />
              <NavLink label="about" link="/about" />
              <NavLink label="gallery" link="/gallery" />
            </nav>
          </div>
        </header>
      ) : (
        <header className="flex flex-row justify-between items-center p-16 bg-black w-full fixed">
          <nav className="flex flex-row items-center justify-start gap-16">
            <NavLink label="home" link="/" />
            <NavLink label="contact" link="/contact" />
          </nav>
          <div>
            <h2 className="text-primary">ArtExplorer</h2>
          </div>
          <nav className="flex flex-row items-center justify-start gap-16">
            <NavLink label="about" link="/about" />
            <NavLink label="gallery" link="/gallery" />
          </nav>
        </header>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
