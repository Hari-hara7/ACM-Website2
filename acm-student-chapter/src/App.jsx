// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Global styling if needed

// Import all the page components from the pages folder
import Home from './pages/Home';
import Events from './pages/Events'; // Ensure the folder name is correct
import CoreMembers from './pages/CoreMembers'; // Ensure the folder name is correct
import Contact from './pages/Contact'; // Ensure the folder name is correct

// Import Navbar and Footer components for layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar will be visible on all pages */}
        <Navbar />

        {/* Main content area */}
        <main style={{ paddingTop: '60px' }}> {/* Add padding for fixed navbar */}
          {/* Define the routes for each page */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/core-members" element={<CoreMembers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer will be visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
