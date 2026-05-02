import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="footer-logo">Stunet<span className="dot">.</span></Link>
            <p className="footer-tagline">
              The ultimate student management system designed to make your academic journey 
              seamless, productive, and collaborative.
            </p>
            <div className="social-links">
              <a href="#"><Github size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-list">
              <li><Link to="/colleges">Colleges</Link></li>
              <li><Link to="/rounds">Rounds</Link></li>
              <li><Link to="/papers">Papers</Link></li>
              <li><Link to="/notes">Notes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Stunet. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="text-red-500 fill-current" /> for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
