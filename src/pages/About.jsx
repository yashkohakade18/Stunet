import React from 'react';
import Card from '../components/ui/Card';

const About = () => {
  return (
    <main style={{ padding: '6rem 3rem', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span className="highlight">Stunet</span></h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Stunet was built with a single mission in mind: to simplify and elevate the educational experience for students and educators alike.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text)' }}>
            We believe that technology should remove barriers to learning, not create them. By providing a centralized platform for resources, collaboration, and progress tracking, Stunet empowers you to focus on what truly matters: your education.
          </p>
        </div>
        <Card style={{ padding: '3rem', textAlign: 'center', background: 'var(--accent-bg)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-h)' }}>Our Vision</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text)' }}>To become the global standard for seamless academic management and student collaboration.</p>
        </Card>
      </div>
    </main>
  );
};

export default About;
