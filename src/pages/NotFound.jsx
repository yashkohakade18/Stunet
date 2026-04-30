import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <main style={{ padding: '8rem 2rem', textAlign: 'center', flex: 1 }}>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--accent)' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text)', marginBottom: '3rem', fontSize: '1.25rem' }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </main>
  );
};

export default NotFound;
