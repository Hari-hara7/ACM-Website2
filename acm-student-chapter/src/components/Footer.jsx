// src/components/Footer.jsx

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Club Information */}
          <div className="footer-section about-club">
            <h2>ACM Student Chapter</h2>
            <p>
              The ACM Student Chapter is a student-run organization that fosters learning, collaboration, and innovation in the field of computer science. We organize events, workshops, and competitions that bring students together and help them grow in their technical journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/core-members">Core Members</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h2>Contact Us</h2>
            <ul>
              <li><FaEnvelope /> acmstudentchapter@college.com</li>
              <li><FaPhone /> +91 12345 67890</li>
            </ul>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section newsletter">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe to our newsletter to receive the latest news and updates on upcoming events.</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 ACM Student Chapter. All Rights Reserved.</p>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
