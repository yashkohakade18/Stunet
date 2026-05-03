import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Navigation, GraduationCap, Search } from 'lucide-react';
import { COLLEGES } from '../data/colleges';

export default function CollegeMap() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="page-header-centered mb-10">
        <div className="page-badge"><Map size={14} /> College Map</div>
        <h1 className="page-hero-title">College <span className="highlight">Locations</span></h1>
        <p className="page-hero-subtitle">Explore engineering colleges across Maharashtra on an interactive map.</p>
      </header>

      {/* Map Placeholder */}
      <div className="map-placeholder-container">
        <div className="map-placeholder-bg">
          {/* Fake map grid */}
          <div className="map-grid-overlay"></div>

          {/* College pins */}
          {COLLEGES.slice(0, 6).map((college, idx) => (
            <div
              key={college.id}
              className="map-pin-wrapper"
              style={{
                left: `${15 + (idx % 3) * 30}%`,
                top: `${20 + Math.floor(idx / 3) * 40}%`,
              }}
            >
              <div className="map-pin-dot">
                <GraduationCap size={14} />
              </div>
              <div className="map-pin-label">{college.name.split(' ')[0]}</div>
            </div>
          ))}

          {/* Center message */}
          <div className="map-coming-soon">
            <Navigation size={40} className="text-accent mb-4 opacity-60" />
            <h3>Interactive Map</h3>
            <p>Full interactive map with Google Maps integration coming soon.</p>
            <Link to="/colleges" className="map-fallback-link">
              <Search size={16} /> Browse Colleges Instead
            </Link>
          </div>
        </div>
      </div>

      {/* College List Below Map */}
      <div className="map-college-list">
        {COLLEGES.slice(0, 4).map(college => (
          <Link key={college.id} to={`/colleges/${college.id}`} className="map-college-chip">
            <div className="map-chip-dot"></div>
            <div>
              <span className="map-chip-name">{college.name}</span>
              <span className="map-chip-loc">{college.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
