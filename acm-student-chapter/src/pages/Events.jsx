
import './Events.css'; 
import { FaLaptopCode, FaTools, FaMicrophone, FaRobot, FaCloud, FaLock, FaChartBar, FaMobileAlt } from 'react-icons/fa';
import clubLogo from '../assets/logo.png'; 
import eventPoster1 from '../assets/acm1.png'; 
import eventPoster2 from '../assets/acm2.png'; 
import eventPoster3 from '../assets/event3.jpeg'; 
import eventPoster4 from '../assets/event4.png';

const upcomingEventsData = [
  {
    title: "Hackathon 2024",
    date: "March 15-16, 2024",
    description: "Join us for a 24-hour hackathon where teams will compete to create innovative solutions.",
    poster: eventPoster1,
    icon: <FaLaptopCode />,
  },
  {
    title: "Web Development Workshop",
    date: "April 10, 2024",
    description: "A hands-on workshop focused on modern web development techniques.",
    poster: eventPoster2,
    icon: <FaTools />,
  },
  {
    title: "Guest Lecture by Industry Experts",
    date: "May 5, 2024",
    description: "Learn from the best! Join us for a guest lecture featuring top industry professionals.",
    poster: eventPoster3,
    icon: <FaMicrophone />,
  },
  {
    title: "AI and Machine Learning Seminar",
    date: "June 12, 2024",
    description: "Explore the latest trends in AI and machine learning with industry leaders.",
    poster: eventPoster4,
    icon: <FaRobot />,
  },
];

const previousEventsData = [
  {
    title: "Cloud Computing Workshop",
    date: "February 20, 2024",
    description: "A deep dive into cloud computing platforms and their practical uses.",
    icon: <FaCloud />,
  },
  {
    title: "Cybersecurity Awareness Seminar",
    date: "January 10, 2024",
    description: "Learn how to protect yourself and your organization from cyber threats.",
    icon: <FaLock />,
  },
  {
    title: "Data Science Bootcamp",
    date: "December 5, 2023",
    description: "An intensive bootcamp covering essential data science topics and tools.",
    icon: <FaChartBar />,
  },
  {
    title: "IoT and Smart Devices Workshop",
    date: "November 18, 2023",
    description: "Understand how IoT is transforming industries and the future of technology.",
    icon: <FaMobileAlt />,
  },
];

const Events = () => {
  return (
    <div className="events">
      <h1>Previous Events</h1>
      <div className="events-grid">
        {upcomingEventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="card-header">
              <img src={clubLogo} alt="Club Logo" className="club-logo" />
              <h3>{event.title}</h3>
            </div>
            <img src={event.poster} alt={event.title} className="event-poster" />
            <p className="event-date">{event.date}</p>
            <p className="event-description">
              <span className="event-icon">{event.icon}</span> {event.description}
            </p>
          </div>
        ))}
      </div>

      <h1>Upcoming Events</h1>
      <div className="events-grid previous-events">
        {previousEventsData.map((event, index) => (
          <div className="event-card no-poster" key={index}>
            <div className="card-header">
              <img src={clubLogo} alt="Club Logo" className="club-logo" />
              <h3>{event.title}</h3>
            </div>
            <p className="event-date">{event.date}</p>
            <p className="event-description">
              <span className="event-icon">{event.icon}</span> {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
