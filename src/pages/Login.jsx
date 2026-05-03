import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Sparkles, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
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
    <div className="auth-split-page">
      {/* Left Panel */}
      <div className="auth-left-panel">
        <div className="auth-left-content">
          <Link to="/" className="auth-brand">
            <div className="auth-brand-icon"></div>
            <span>Stunet</span>
          </Link>
          <div className="auth-left-text">
            <h2>Your Academic Journey<br/><span className="auth-gradient-text">Starts Here</span></h2>
            <p>Join 10,000+ students using Stunet to navigate admissions, access study materials, and plan their future.</p>
          </div>
          <div className="auth-features-list">
            {['CET-based college matching', 'Collaborative study resources', 'AI-powered guidance'].map((f, i) => (
              <div key={i} className="auth-feature-item">
                <div className="auth-feature-dot"></div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="auth-left-bg-orb orb-1"></div>
        <div className="auth-left-bg-orb orb-2"></div>
      </div>

      {/* Right Panel */}
      <div className="auth-right-panel">
        <div className="auth-form-card">
          <div className="auth-form-header">
            <div className="auth-icon-pill">
              <Sparkles size={16} /> Sign In
            </div>
            <h1 className="auth-form-title">Welcome back</h1>
            <p className="auth-form-subtitle">Enter your credentials to continue</p>
          </div>

          {error && (
            <div className="auth-error-banner">
              <span>⚠ {error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form-body">
            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="auth-input-icon" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="auth-input"
                />
              </div>
            </div>

            <div className="auth-field">
              <div className="auth-label-row">
                <label className="auth-label">Password</label>
                <a href="#" className="auth-forgot">Forgot password?</a>
              </div>
              <div className="auth-input-wrapper">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="auth-input"
                />
                <button type="button" className="auth-eye-btn" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="auth-loading-dots"><span></span><span></span><span></span></span>
              ) : (
                <><span>Sign In</span><ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="auth-form-footer">
            <span>Don't have an account?</span>
            <Link to="/register" className="auth-switch-link">Create one <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
