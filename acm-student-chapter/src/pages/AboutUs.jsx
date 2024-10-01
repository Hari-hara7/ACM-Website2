
import './AboutUs.css'; // Ensure to create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Welcome to the ACM Student Chapter, a vibrant community of tech enthusiasts and innovators.
          Our mission is to empower students through collaboration, education, and hands-on experiences.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide an inclusive platform that encourages students to develop their
            technical skills, engage in networking opportunities, and contribute to impactful projects.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every student is equipped with the skills and confidence to thrive
            in the tech industry, fostering innovation and excellence.
          </p>
        </div>
      </section>

      <section className="core-values">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We uphold honesty and transparency in all our activities.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork to achieve common goals.</li>
          <li><strong>Innovation:</strong> We encourage creativity and out-of-the-box thinking.</li>
          <li><strong>Respect:</strong> We value diversity and promote a culture of inclusivity.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>John Doe</h3>
          <p>President - Leading our chapter with vision and enthusiasm.</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Vice President - Ensuring smooth operations and collaboration.</p>
        </div>
        <div className="team-member">
          <h3>Tom Brown</h3>
          <p>Secretary - Managing communications and documentation.</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>If you have questions or want to collaborate, reach out!</p>
        <p>Email: acmchapter@example.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
