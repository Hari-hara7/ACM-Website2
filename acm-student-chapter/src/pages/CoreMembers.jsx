import React from 'react';
import './CoreMembers.css'; // Ensure this CSS file exists for styling
import clubLogo from '../assets/logo.png'; // Path to the club logo

// Importing all the member photos
import unknown from '../assets/unknown.png';
import Eshaan from '../assets/Eshaan.png';
import lasya from '../assets/shreelasya.png';
import Rashmitha from '../assets/Rashmitha.png';
import Neil from '../assets/Neil.png';
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

// Member data with their photos and social media links, and descriptions
const membersData = [
  {
    name: "Neil Mammen Prakash",
    role: "President",
    description: "Leading the club with a passion for innovation and creativity.",
    photo: Neil,
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    name: "Namartha M",
    role: "Vice President",
    description: "Managing events and activities with a focus on teamwork.",
    photo: namratha,
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Rashmitha r bangera", // Replace with the actual name
    role: "Treasurer",
    description: "Responsible for managing the club’s finances, overseeing budgeting, and ensuring financial transparency for all activities and events.",
    photo: Rashmitha, // Replace "unknown" with the actual path to the Treasurer's photo if available
    socialLinks: {
      linkedin: "https://linkedin.com/in/treasurerprofile", // Replace with actual LinkedIn URL
      github: "https://github.com/treasurerprofile", // Replace with actual GitHub URL if applicable
    },
  },

  {
    name: "Sannidhi S Shetty",
    role: "Secretary",
    description: "Coordinating club operations and ensuring smooth workflow.",
    photo: sannidhi,
    socialLinks: {
      linkedin: "https://linkedin.com/in/tombrown",
      github: "https://github.com/tombrown",
    },
  },
  {
    name: "Sujal Sunil Badde",
    role: "Vice Secretary",
    description: "Assisting in club coordination and communication.",
    photo: sujal,
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilywhite",
      github: "https://github.com/emilywhite",
    },
  },
  {
    name: "Hariharanath",
    role: "Web Developer",
    description: "Building and maintaining the club's digital presence.",
    photo: hari,
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    name: "Ayush Chaudhary",
    role: "Web Developer",
    description: "Building and maintaining the club's digital presence.",
    photo: unknown,
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    name: "Shaldon Barnes",
    role: "Web Developer",
    description: "Creating innovative web solutions for the club's needs.",
    photo: shaldon,
    socialLinks: {
      linkedin: "https://linkedin.com/in/chrisevans",
      github: "https://github.com/chrisevans",
    },
  },
  {
    name: "Swasthi Shetty",
    role: "Event Head",
    description: "Planning and organizing exciting club events.",
    photo: swathi,
    socialLinks: {
      linkedin: "https://linkedin.com/in/dianaprince",
      github: "https://github.com/dianaprince",
    },
  },
  {
    name: "Anagha",
    role: "Event Co-Head",
    description: "Assisting in event management and execution.",
    photo: anagha,
    socialLinks: {
      linkedin: "https://linkedin.com/in/ethanhunt",
      github: "https://github.com/ethanhunt",
    },
  },
  {
    name: "Harshita Hegde",
    role: "Publicity Head",
    description: "Handling club promotions and public relations.",
    photo: harshitha,
    socialLinks: {
      linkedin: "https://linkedin.com/in/fionagallagher",
      github: "https://github.com/fionagallagher",
    },
  },
  {
    name: "Gokul Anil",
    role: "Publicity Co-Head",
    description: "Supporting publicity efforts and outreach activities.",
    photo: gokul,
    socialLinks: {
      linkedin: "https://linkedin.com/in/georgeclooney",
      github: "https://github.com/georgeclooney",
    },
  },
  {
    name: "Susan Riona Dsouza",
    role: "Second Year Representative",
    description: "Representing the voice of second-year students.",
    photo: susan,
    socialLinks: {
      linkedin: "https://linkedin.com/in/hannahbaker",
      github: "https://github.com/hannahbaker",
    },
  },
  {
    name: "Shawn Dsouza",
    role: "Third Year Representative",
    description: "Connecting third-year students to club activities.",
    photo: shawn,
    socialLinks: {
      linkedin: "https://linkedin.com/in/ianmalcolm",
      github: "https://github.com/ianmalcolm",
    },
  },
  {
    name: "Diya M Shetty",
    role: "Documentation Head",
    description: "Managing and organizing all documentation tasks.",
    photo: diya,
    socialLinks: {
      linkedin: "https://linkedin.com/in/jacksparrow",
      github: "https://github.com/jacksparrow",
    },
  },
  {
    name: "Dhruva Shedbalkar",
    role: "Documentation Co-head",
    description: "Supporting the documentation and records team.",
    photo: dhruva,
    socialLinks: {
      linkedin: "https://linkedin.com/in/karathrace",
      github: "https://github.com/karathrace",
    },
  },
  {
    name: "Aakash",
    role: "Photography Head",
    description: "Leads the photography team by capturing and documenting events, ensuring high-quality visual content for the club’s archives and promotional activities.",
    photo: unknown, // Replace "unknown" with the actual path to Aakash's photo if available
    socialLinks: {
      linkedin: "https://linkedin.com/in/karathrace",
      github: "https://github.com/karathrace",
    },
  },

  {
    name: "V Mithun Mallya",
    role: "Photography Co-head",
    description: "Capturing memories and moments at all events.",
    photo: mithun,
    socialLinks: {
      linkedin: "https://linkedin.com/in/mayaangelou",
      github: "https://github.com/mayaangelou",
    },
  },
  {
    name: "N Ajay Kamath",
    role: "Photography Co-head",
    description: "Assisting in event photography and media coverage.",
    photo: ajay,
    socialLinks: {
      linkedin: "https://linkedin.com/in/ninasimone",
      github: "https://github.com/ninasimone",
    },
  },
  {
    name: "Pratheeksha",
    role: "Graphic Designer",
    description: "Designing visual content and club branding materials.",
    photo: pratheeksha,
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Eshaan",
    role: "Graphic Designer",
    description: "Designing visual content and club branding materials.",
    photo: Eshaan,
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Sarang Sudheep",
    role: "Graphic Designer",
    description: "Designing visual content and club branding materials.",
    photo: unknown,
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Shreelasya",
    role: "Social Media Head",
    description: "Oversees the creation and design of visual content for social media, ensuring consistency with club branding. Leads campaigns and strategies to enhance digital engagement.",
    photo: lasya, // You can replace "unknown" with the actual path to Shreelasya's photo if available
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Thanmayi",
    role: "Social Media Co-head",
    description: "Supports the Social Media Head by managing daily content creation and curation across platforms. Collaborates on digital marketing strategies to grow online presence.",
    photo: thanmayi, // You can replace "thanmayi" with the actual path to Thanmayi's photo
    socialLinks: {
      linkedin: "https://linkedin.com/in/rickgrimes",
      github: "https://github.com/rickgrimes",
    },
  },

  {
    name: "Shyvalani B S",
    role: "Student Advisor",
    description: "Provides guidance and mentorship to the club members, offering insights into project execution and academic balance. Assists in aligning club activities with academic goals.",
    photo: unknown, // Replace "unknown" with the actual path to Shyvalani's photo if available
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Sahil S Kambli",
    role: "Student Advisor",
    description: "Acts as a mentor for club activities, advising on both academic and extracurricular aspects. Helps students navigate through their club responsibilities and academic journey.",
    photo: unknown, // Replace "unknown" with the actual path to Sahil's photo if available
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },

];

// CoreMembers component definition with GitHub and LinkedIn icons
const CoreMembers = () => {
  return (
    <div className="core-members" style={{ '--primary-bg-color': '#0b011d', '--secondary-bg-color': '#1d1330', '--primary-text-color': '#ffffff' }}>
      <h1>Meet Our Core Members</h1>
      <div className="members-grid">
        {membersData.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="card-header">
              <img src={clubLogo} alt="Club Logo" className="club-logo" />
              <h3>{member.name}</h3>
            </div>
            <img src={member.photo} alt={member.name} className="member-photo" />
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
            <div className="social-links">
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
              </a>
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> {/* GitHub icon */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreMembers;
