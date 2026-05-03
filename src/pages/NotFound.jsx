import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">
          <span>4</span>
          <div className="not-found-orb">
            <Compass size={48} />
          </div>
          <span>4</span>
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-subtitle">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary-btn">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/colleges" className="not-found-secondary-btn">
            <ArrowLeft size={18} /> Explore Colleges
          </Link>
        </div>
      </div>
      <div className="not-found-bg-orb nf-orb-1"></div>
      <div className="not-found-bg-orb nf-orb-2"></div>
    </div>
  );
};

export default NotFound;
