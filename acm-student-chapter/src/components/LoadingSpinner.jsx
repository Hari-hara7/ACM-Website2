// src/components/LoadingSpinner.jsx

import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div className="spinner-container">
    <PuffLoader color="#ff4b5c" size={60} />
  </div>
);

export default LoadingSpinner;
