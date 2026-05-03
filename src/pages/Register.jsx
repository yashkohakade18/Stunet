import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Sparkles, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
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
    <div className="auth-split-page">
      {/* Left Panel */}
      <div className="auth-left-panel">
        <div className="auth-left-content">
          <Link to="/" className="auth-brand">
            <div className="auth-brand-icon"></div>
            <span>Stunet</span>
          </Link>
          <div className="auth-left-text">
            <h2>Join the<br/><span className="auth-gradient-text">Community</span></h2>
            <p>Create your free account and unlock access to 1000+ study resources, college details, and AI-powered tools.</p>
          </div>
          <div className="auth-features-list">
            {['Free access to all resources', 'Upload and share your materials', 'Get matched to colleges'].map((f, i) => (
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
              <Sparkles size={16} /> Create Account
            </div>
            <h1 className="auth-form-title">Get started free</h1>
            <p className="auth-form-subtitle">No credit card required</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form-body">
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <div className="auth-input-wrapper">
                <User size={18} className="auth-input-icon" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="auth-input"
                />
              </div>
            </div>

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
              <label className="auth-label">Password</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
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
                <><span>Create Account</span><ArrowRight size={18} /></>
              )}
            </button>

            <p className="auth-terms">
              By creating an account, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>
          </form>

          <div className="auth-form-footer">
            <span>Already have an account?</span>
            <Link to="/login" className="auth-switch-link">Sign in <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
