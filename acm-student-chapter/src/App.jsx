import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Importing App CSS for global styles
import Navbar from './components/Navbar'; // Importing Navbar
import Footer from './components/Footer'; // Importing Footer
import LoadingSpinner from './components/LoadingSpinner'; // Importing Loading Spinner
import Home from './pages/Home'; // Importing Home page
import AboutUs from './pages/AboutUs'; // Importing About Us page

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Render the Navbar for navigation */}

        {/* Routes for rendering pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Add more routes here as needed */}
          
          {/* Fallback route for unknown paths */}
          <Route path="*" element={<LoadingSpinner />} /> {/* Show Loading Spinner for unknown routes */}
        </Routes>

        <Footer /> {/* Render the Footer */}
      </div>
    </Router>
  );
};

export default App;
