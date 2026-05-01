import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container" style={{ 
      minHeight: 'calc(100vh - 160px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '2rem'
    }}>
      <Card style={{ 
        maxWidth: '450px', 
        width: '100%', 
        padding: '3rem',
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            color: 'var(--text-h)', 
            marginBottom: '0.5rem',
            fontFamily: 'Syne, sans-serif'
          }}>
            Create <span className="highlight">Account</span>
          </h1>
          <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>
            Join the Stunet community today
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: 500,
              color: 'var(--text-h)'
            }}>
              Full Name
            </label>
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'var(--text-h)',
                outline: 'none',
              }}
            />
          </div>

          <div className="form-group">
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: 500,
              color: 'var(--text-h)'
            }}>
              Email Address
            </label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'var(--text-h)',
                outline: 'none',
              }}
            />
          </div>

          <div className="form-group">
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: 500,
              color: 'var(--text-h)'
            }}>
              Password
            </label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'var(--text-h)',
                outline: 'none',
              }}
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            style={{ width: '100%', marginTop: '0.5rem', height: '3rem' }}
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Register;
