import React, { useState } from 'react';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empower Your <span className="highlight">Learning</span> Journey
          </h1>
          <p className="hero-subtitle">
            Stunet is the ultimate student management platform designed to streamline your academic life. Access resources, track progress, and connect with peers seamlessly.
          </p>
          <div className="hero-actions">
            <button 
              className={`primary-btn ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            <div className="mockup-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="mockup-body">
              <div className="mockup-line w-full"></div>
              <div className="mockup-line w-3/4"></div>
              <div className="mockup-line w-1/2"></div>
              <div className="mockup-grid">
                <div className="mockup-box"></div>
                <div className="mockup-box"></div>
              </div>
            </div>
          </div>
          <div className="glow-effect"></div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon file-icon">📁</div>
            <h3>Resource Management</h3>
            <p>Easily upload, organize, and download study materials, lecture notes, and assignments.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon track-icon">📈</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your academic performance with intuitive dashboards and analytics tools.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon connect-icon">🤝</div>
            <h3>Collaborative Spaces</h3>
            <p>Connect with peers, form study groups, and engage in real-time discussions.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
