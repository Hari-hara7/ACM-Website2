
import './Home.css'; 
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
    
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the ACM Student Chapter</h1>
          <p className="hero-tagline">Empowering Innovation through Collaboration</p>
          <a href="#events" className="hero-button">Explore Events</a>
        </div>
      </section>

     
      <section className="about">
        <h2>About Us</h2>
        <p>
          The ACM Student Chapter at our college is a community of passionate tech enthusiasts,
          dedicated to fostering innovation and collaboration among students. We organize workshops,
          seminars, and hackathons to enhance technical skills and provide a platform for networking.
        </p>
      </section>

     
      <section className="vision">
        <h2>Vision</h2>
        <p>
          Our vision is to be a leading technical club that nurtures talent and inspires students
          to innovate and excel in the field of computer science and technology.
        </p>
      </section>

     
      <section className="values">
        <h2>Values</h2>
        <ul>
          <li>Integrity: We believe in honesty and transparency.</li>
          <li>Collaboration: Working together to achieve common goals.</li>
          <li>Innovation: Encouraging creativity and new ideas.</li>
          <li>Respect: Valuing diverse perspectives and backgrounds.</li>
        </ul>
      </section>


      <section className="beliefs">
        <h2>Beliefs</h2>
        <p>
          We believe in the power of technology to transform lives and create opportunities.
          Our commitment to continuous learning and improvement drives us to stay ahead in a rapidly
          evolving field.
        </p>
      </section>

    
      <section className="events" id="events">
        <h2>Upcoming Events</h2>
        <p>Join us for exciting events that inspire creativity and collaboration!</p>
        <ul>
          <li>Hackathon - Date: XX/XX/XXXX</li>
          <li>Workshop on Web Development - Date: XX/XX/XXXX</li>
          <li>Guest Lecture - Date: XX/XX/XXXX</li>
        </ul>
      </section>

      
      <section className="core-members">
        <h2>Meet Our Core Members</h2>
        <p>Our dedicated team is here to guide and support you!</p>
        <ul>
          <li>Neil - President</li>
          <li>Namratha - Vice President</li>
          <li>Sannidhi - Secretary</li>
        </ul>
      </section>

     
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>If you have any questions or want to collaborate, feel free to reach out!</p>
        <p>Email: acmchapter@example.com</p>
      </section>
    </div>
  );
};

export default Home;
