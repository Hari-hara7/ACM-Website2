
import './CoreMembers.css'; // Ensure to create this CSS file for styling
import clubLogo from '../assets/club-logo.png'; // Path to the club logo

// Member data with their photos and social media links
const membersData = [
  {
    name: "John Doe",
    role: "President",
    photo: "../assets/john-doe.jpg", // Path to member's photo
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    photo: "../assets/jane-smith.jpg", // Path to member's photo
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Tom Brown",
    role: "Secretary",
    photo: "../assets/tom-brown.jpg", // Path to member's photo
    socialLinks: {
      linkedin: "https://linkedin.com/in/tombrown",
      github: "https://github.com/tombrown",
    },
  },
  {
    name: "Emily White",
    role: "Treasurer",
    photo: "../assets/emily-white.jpg", // Path to member's photo
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilywhite",
      github: "https://github.com/emilywhite",
    },
  },
  {
    name: "Alice Johnson",
    role: "Event Coordinator",
    photo: "../assets/alice-johnson.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    name: "Bob Lee",
    role: "Technical Head",
    photo: "../assets/bob-lee.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/boblee",
      github: "https://github.com/boblee",
    },
  },
  {
    name: "Chris Evans",
    role: "Marketing Head",
    photo: "../assets/chris-evans.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/chrisevans",
      github: "https://github.com/chrisevans",
    },
  },
  {
    name: "Diana Prince",
    role: "Sponsorship Coordinator",
    photo: "../assets/diana-prince.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/dianaprince",
      github: "https://github.com/dianaprince",
    },
  },
  {
    name: "Ethan Hunt",
    role: "Content Creator",
    photo: "../assets/ethan-hunt.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ethanhunt",
      github: "https://github.com/ethanhunt",
    },
  },
  {
    name: "Fiona Gallagher",
    role: "Web Developer",
    photo: "../assets/fiona-gallagher.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fionagallagher",
      github: "https://github.com/fionagallagher",
    },
  },
  {
    name: "George Clooney",
    role: "Graphic Designer",
    photo: "../assets/george-clooney.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/georgeclooney",
      github: "https://github.com/georgeclooney",
    },
  },
  {
    name: "Hannah Baker",
    role: "Social Media Manager",
    photo: "../assets/hannah-baker.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/hannahbaker",
      github: "https://github.com/hannahbaker",
    },
  },
  {
    name: "Ian Malcolm",
    role: "Community Outreach",
    photo: "../assets/ian-malcolm.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ianmalcolm",
      github: "https://github.com/ianmalcolm",
    },
  },
  {
    name: "Jack Sparrow",
    role: "Community Manager",
    photo: "../assets/jack-sparrow.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jacksparrow",
      github: "https://github.com/jacksparrow",
    },
  },
  {
    name: "Kara Thrace",
    role: "Workshop Coordinator",
    photo: "../assets/kara-thrace.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/karathrace",
      github: "https://github.com/karathrace",
    },
  },
  {
    name: "Luke Skywalker",
    role: "Hackathon Organizer",
    photo: "../assets/luke-skywalker.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/lukeskywalker",
      github: "https://github.com/lukeskywalker",
    },
  },
  {
    name: "Maya Angelou",
    role: "Alumni Coordinator",
    photo: "../assets/maya-angelou.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mayaangelou",
      github: "https://github.com/mayaangelou",
    },
  },
  {
    name: "Nina Simone",
    role: "Mentorship Coordinator",
    photo: "../assets/nina-simone.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ninasimone",
      github: "https://github.com/ninasimone",
    },
  },
  {
    name: "Oliver Twist",
    role: "Technical Writer",
    photo: "../assets/oliver-twist.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/olivertwist",
      github: "https://github.com/olivertwist",
    },
  },
  {
    name: "Peter Parker",
    role: "Network Administrator",
    photo: "../assets/peter-parker.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/peterparker",
      github: "https://github.com/peterparker",
    },
  },
  {
    name: "Quinn Fabray",
    role: "UX/UI Designer",
    photo: "../assets/quinn-fabray.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/quinnfabray",
      github: "https://github.com/quinnfabray",
    },
  },
  {
    name: "Rick Grimes",
    role: "IT Support",
    photo: "../assets/rick-grimes.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rickgrimes",
      github: "https://github.com/rickgrimes",
    },
  },
];

const CoreMembers = () => {
  return (
    <div className="core-members">
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
            <div className="social-links">
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreMembers;
