import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, X, Briefcase, Mail, ArrowRight, Heart, BookOpen, FileText, Users, Map } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Platform: [
      { label: 'College List', to: '/colleges' },
      { label: 'College Map', to: '/map' },
      { label: 'CAP Rounds', to: '/rounds' },
      { label: 'Question Papers', to: '/papers' },
      { label: 'Study Notes', to: '/notes' },
    ],
    Account: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'My Profile', to: '/profile' },
      { label: 'Favorites', to: '/favorites' },
      { label: 'Sign In', to: '/login' },
      { label: 'Register', to: '/register' },
    ],
    Company: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
    ],
  };

  const socials = [
    { icon: <Globe size={18} />, href: '#', label: 'GitHub' },
    { icon: <X size={18} />, href: '#', label: 'X' },
    { icon: <Briefcase size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="site-footer">
      {/* Newsletter Banner */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div className="footer-nl-text">
            <h3>Stay updated with Stunet</h3>
            <p>Get the latest college cutoffs, PYQs, and admission news directly in your inbox.</p>
          </div>
          <div className="footer-nl-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-nl-input"
            />
            <button className="footer-nl-btn">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="footer-body-inner">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-icon">
                <GraduationCap size={20} />
              </div>
              <span className="footer-logo-text">Stunet</span>
            </Link>
            <p className="footer-brand-desc">
              The ultimate student platform for Maharashtra engineering admissions. Access PYQs, notes, and college data — all in one place.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer-social-btn" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="footer-stats-row">
              <div className="footer-stat">
                <span className="footer-stat-val">10k+</span>
                <span className="footer-stat-label">Students</span>
              </div>
              <div className="footer-stat">
                <span className="footer-stat-val">500+</span>
                <span className="footer-stat-label">Colleges</span>
              </div>
              <div className="footer-stat">
                <span className="footer-stat-val">1k+</span>
                <span className="footer-stat-label">Resources</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="footer-link-col">
              <h4 className="footer-col-title">{group}</h4>
              <ul className="footer-link-list">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {year} Stunet. All rights reserved.
          </p>
          <div className="footer-bottom-badges">
            <span className="footer-badge">🇮🇳 Made for Indian Students</span>
            <span className="footer-badge-separator">·</span>
            <span className="footer-badge">Maharashtra CET 2024</span>
          </div>
          <p className="footer-made-with">
            Made with <Heart size={13} className="footer-heart" /> for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
