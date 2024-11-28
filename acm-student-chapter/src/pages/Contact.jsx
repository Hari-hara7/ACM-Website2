

import './Contact.css'; 
import { useState } from 'react'; 

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const form = event.target; 

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true); 
        form.reset(); 
      } else {
        setError('There was a problem with your submission. Please try again.'); 
      }
    } catch (err) {
      console.error('Error:', err);
      setError('There was an error submitting the form. Please try again later.'); 
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>

     
      <div className="contact-info">
        <p>
          <strong>Email:</strong> acmchapter@nitte.edu.in
        </p>
        <p>
          <strong>Phone:</strong> +91 87928 92008
        </p>
        <p>
          <strong>Location:</strong> NMAMIT, Nitte, Karkala, Karnataka, India
        </p>
      </div>

      
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9788876241053!2d74.88027117466763!3d13.205723713218155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca5b11234a6a5%3A0x57c20a9bc2c81805!2sNMAMIT!5e0!3m2!1sen!2sin!4v1693459599391!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

     
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="_replyto" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        {isSubmitted && <div className="custom-message">Thank you for your submission!</div>}
        {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
      </div>
    </div>
  );
};

export default Contact;
