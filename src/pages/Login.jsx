import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
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
            Welcome <span className="highlight">Back</span>
          </h1>
          <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>
            Enter your credentials to access your account
          </p>
        </div>

        {error && (
          <div style={{ 
            background: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid rgba(239, 68, 68, 0.2)', 
            color: '#ef4444', 
            padding: '0.75rem', 
            borderRadius: '0.5rem', 
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
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
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            style={{ width: '100%', marginTop: '0.5rem', height: '3rem' }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text)' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
            Create one
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
