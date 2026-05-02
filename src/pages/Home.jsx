import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import heroImage from '../assets/hero.png';

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
            <Button 
              variant="primary"
              className={isHovered ? 'hovered' : ''}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Stunet Dashboard" className="hero-image" />
          </div>
          <div className="glow-effect"></div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Core Features</h2>
        <div className="features-grid">
          <Card>
            <CardHeader>
              <div className="feature-icon file-icon">📁</div>
              <h3>Resource Management</h3>
            </CardHeader>
            <CardContent>
              <p>Easily upload, organize, and download study materials, lecture notes, and assignments.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="feature-icon track-icon">📈</div>
              <h3>Progress Tracking</h3>
            </CardHeader>
            <CardContent>
              <p>Monitor your academic performance with intuitive dashboards and analytics tools.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="feature-icon connect-icon">🤝</div>
              <h3>Collaborative Spaces</h3>
            </CardHeader>
            <CardContent>
              <p>Connect with peers, form study groups, and engage in real-time discussions.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;
