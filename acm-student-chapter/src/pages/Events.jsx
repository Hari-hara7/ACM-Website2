// src/components/Events.jsx

import './Events.css'; // Ensure to create this CSS file for styling
import clubLogo from '../assets/club-logo.png'; // Path to the club logo
import eventPoster1 from '../assets/event-poster1.jpg'; // Path to the first event poster
import eventPoster2 from '../assets/event-poster2.jpg'; // Path to the second event poster
import eventPoster3 from '../assets/event-poster3.jpg'; // Path to the third event poster
import eventPoster4 from '../assets/event-poster4.jpg'; // Path to the fourth event poster

const eventsData = [
  {
    title: "Hackathon 2024",
    date: "March 15-16, 2024",
    description: "Join us for a 24-hour hackathon where teams will compete to create innovative solutions.",
    poster: eventPoster1,
    icon: "💻", // Example icons
  },
  {
    title: "Web Development Workshop",
    date: "April 10, 2024",
    description: "A hands-on workshop focused on modern web development techniques.",
    poster: eventPoster2,
    icon: "🛠️", // Example icon
  },
  {
    title: "Guest Lecture by Industry Experts",
    date: "May 5, 2024",
    description: "Learn from the best! Join us for a guest lecture featuring top industry professionals.",
    poster: eventPoster3,
    icon: "🎤", // Example icon
  },
  {
    title: "AI and Machine Learning Seminar",
    date: "June 12, 2024",
    description: "Explore the latest trends in AI and machine learning with industry leaders.",
    poster: eventPoster4,
    icon: "🤖", // Example icon
  },
];

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="card-header">
              <img src={clubLogo} alt="Club Logo" className="club-logo" />
              <h3>{event.title}</h3>
            </div>
            <img src={event.poster} alt={event.title} className="event-poster" />
            <p className="event-date">{event.date}</p>
            <p className="event-description">
              {event.icon} {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
