import { motion } from 'framer-motion';
import './CoreMembers.css'; // Importing styles
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Importing all the member photos
import unknown from '../assets/unknown.png';
import namratha from '../assets/namratha.png';
import sannidhi from '../assets/sannifhi.png';
import sujal from '../assets/Sujal.png';
import hari from '../assets/Hari.png';
import shaldon from '../assets/shaldon.png';
import swathi from '../assets/Swathi.png';
import anagha from '../assets/Anagha.png';
import harshitha from '../assets/Harshitha.png';
import gokul from '../assets/gokul.png';
import susan from '../assets/susan.png';
import shawn from '../assets/shawan.png';
import diya from '../assets/diya.png';
import dhruva from '../assets/Dhruva.png';
import mithun from '../assets/Mithun.png';
import ajay from '../assets/Ajay.png';
import pratheeksha from '../assets/prathiksha.png';
import thanmayi from '../assets/Thanmayi.png';



const teamMembers =  [
  {
    name: 'Neil Mammen Prakash',
    role: 'Chair person',
    description: 'Leading the team with vision and direction.',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    photo: unknown, // Update with actual path
  },
  {
    name: 'Namartha M',
    role: 'Vice Chairman',
    description: 'Assisting the chair in managing the team and projects.',
    github: 'https://github.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    photo: namratha , // Update with actual path
  },
  {
    name: 'Sannidhi S Shetty',
    role: 'Secretary',
    description: 'Responsible for documentation and communication.',
    github: 'https://github.com/tombrown',
    linkedin: 'https://linkedin.com/in/tombrown',
    photo: sannidhi, // Update with actual path
  },
  {
    name: 'Sujal Sunil Badde',
    role: 'Vice Secretary',
    description: 'Supporting the secretary in all tasks and responsibilities.',
    github: 'https://github.com/emilywhite',
    linkedin: 'https://linkedin.com/in/emilywhite',
    photo: sujal, // Update with actual path
  },
  {
    name: 'K.B.Hariharanath',
    role: 'Web Developer',
    description: 'Creating and maintaining the team’s online presence.',
    github: 'https://github.com/alicejohnson',
    linkedin: 'https://linkedin.com/in/alicejohnson',
    photo: hari, // Update with actual path
  },
  {
    name: 'Shaldon Barnes',
    role: 'Web Developer',
    description: 'Developing innovative web solutions for our projects.',
    github: 'https://github.com/chrisevans',
    linkedin: 'https://linkedin.com/in/chrisevans',
    photo:shaldon, // Update with actual path
  },
  {
    name: 'Swathi Shetty',
    role: 'Event Head',
    description: 'Overseeing and organizing events and activities.',
    github: 'https://github.com/dianaprince',
    linkedin: 'https://linkedin.com/in/dianaprince',
    photo: swathi, // Update with actual path
  },
  {
    name: 'Anagha',
    role: 'Event Co-Head',
    description: 'Assisting in planning and executing events.',
    github: 'https://github.com/ethanhunt',
    linkedin: 'https://linkedin.com/in/ethanhunt',
    photo: anagha, // Update with actual path
  },
  {
    name: 'Harshita Hegde',
    role: 'Publicity Head',
    description: 'Managing all publicity and promotional activities.',
    github: 'https://github.com/fionagallagher',
    linkedin: 'https://linkedin.com/in/fionagallagher',
    photo:harshitha, // Update with actual path
  },
  {
    name: 'Gokul Anil',
    role: 'Publicity Co-Head',
    description: 'Supporting the publicity head in marketing initiatives.',
    github: 'https://github.com/georgeclooney',
    linkedin: 'https://linkedin.com/in/georgeclooney',
    photo: gokul, // Update with actual path
  },
  {
    name: 'Susan Riona Dsouza',
    role: 'Second Year Representative',
    description: 'Representing the interests of second-year students.',
    github: 'https://github.com/hannahbaker',
    linkedin: 'https://linkedin.com/in/hannahbaker',
    photo: susan, // Update with actual path
  },
  {
    name: 'Shawn Dsouza',
    role: 'Third Year Representative',
    description: 'Acting as a liaison for third-year students.',
    github: 'https://github.com/ianmalcolm',
    linkedin: 'https://linkedin.com/in/ianmalcolm',
    photo: shawn, // Update with actual path
  },
  {
    name: 'Diya M Shetty',
    role: 'Documentation Head',
    description: 'Managing all project documentation and reports.',
    github: 'https://github.com/jacksparrow',
    linkedin: 'https://linkedin.com/in/jacksparrow',
    photo: diya, // Update with actual path
  },
  {
    name: 'Dhruva Shedbalkar',
    role: 'Documentation Co-head',
    description: 'Assisting the documentation head with various tasks.',
    github: 'https://github.com/karathrace',
    linkedin: 'https://linkedin.com/in/karathrace',
    photo: dhruva, // Update with actual path
  },
  {
    name: 'V Mithun Mallya',
    role: 'Photography Co-head',
    description: 'Capturing moments and creating visual content.',
    github: 'https://github.com/mayaangelou',
    linkedin: 'https://linkedin.com/in/mayaangelou',
    photo: mithun, // Update with actual path
  },
  {
    name: 'N Ajay Kamath',
    role: 'Photography Co-head',
    description: 'Collaborating on photography projects and documentation.',
    github: 'https://github.com/ninasimone',
    linkedin: 'https://linkedin.com/in/ninasimone',
    photo: ajay, // Update with actual path
  },
  {
    name: 'Pratheeksha',
    role: 'Graphic Designer',
    description: 'Designing graphics and visual materials for projects.',
    github: 'https://github.com/olivertwist',
    linkedin: 'https://linkedin.com/in/olivertwist',
    photo: pratheeksha, // Update with actual path
  },
  {
    name: 'Thanmayi',
    role: 'Social Media Co-head',
    description: 'Managing social media accounts and strategies.',
    github: 'https://github.com/rickgrimes',
    linkedin: 'https://linkedin.com/in/rickgrimes',
    photo: thanmayi, // Update with actual path
  },
];



const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.h1 className="about-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Us
      </motion.h1>
      <motion.p className="about-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        We are a passionate team dedicated to providing top-notch web development services, specializing in PWA, SEO, UI/UX design, and much more. Our mission is to create innovative solutions that empower users and enhance their online experiences.
      </motion.p>

      <div className="team-container">
        {teamMembers.map((member) => (
          <motion.div className="team-card" key={member.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={member.photo} alt={`${member.name}`} className="team-photo" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
            <div className="social-links">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="github-button">
              View GitHub
            </a>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default AboutUs;