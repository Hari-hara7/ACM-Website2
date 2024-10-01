// src/Pages/Contact.jsx

import './Contact.css'; // Ensure you create a corresponding CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>

      {/* Contact Information */}
      <div className="contact-info">
        <p>
          <strong>Email:</strong> acmchapter@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (234) 567-8901
        </p>
        <p>
          <strong>Location:</strong> College Name, City, Country
        </p>
      </div>

      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086295!2d144.95373631550443!3d-37.81627927975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2a774df%3A0x2b36fbb6ff1e5d6f!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1636898495222!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form action="https://formspree.io/f/{your-form-id}" method="POST">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
