// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Global styling if needed

// Import all the page components from the Pages folder
import Home from './pages/Home';

import Events from './Pages/Events';
import CoreMembers from './Pages/CoreMembers';
import Contact from './Pages/Contact';


// Import Navbar and Footer components for layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar will be visible on all pages */}
        <Navbar />

        {/* Define the routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/events" element={<Events />} />
          <Route path="/core-members" element={<CoreMembers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer will be visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
