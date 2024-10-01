
import './Contact.css'; // Ensure to create this CSS file for styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Leaflet for maps
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet

import iconRetinaUrl from '../assets/marker-icon-2x.png'; // Path to your marker icon
import iconUrl from '../assets/marker-icon.png'; // Path to your marker icon
import shadowUrl from '../assets/marker-shadow.png'; // Path to your marker shadow icon

// Set up the default icon for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions, suggestions, or feedback, feel free to reach out to us.
      </p>
      
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:club@example.com">club@example.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Club Street, City, State, Zip Code
          </li>
        </ul>
      </div>

      <div className="map-container">
        <MapContainer center={[40.712776, -74.005974]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[40.712776, -74.005974]}>
            <Popup>
              Our Club Location: <br /> 123 Club Street, City, State, Zip Code
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
