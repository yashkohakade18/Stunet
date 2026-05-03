import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { Sparkles, Users, BookOpen, MessageSquare, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import heroImage from '../assets/hero.png';

const RECENT_UPLOADS = [
  { id: 1, user: 'Rahul S.', type: 'Note', title: 'Data Structures Units 1-3', time: '2h ago' },
  { id: 2, user: 'Anjali P.', type: 'Paper', title: 'SPPU May 2023 - Maths II', time: '5h ago' },
  { id: 3, user: 'Vikram K.', type: 'Note', title: 'DBMS SQL Cheat Sheet', time: '1d ago' },
];

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(0,210,255,0.08)] border border-[rgba(0,210,255,0.2)] rounded-full text-[11px] font-mono text-[#00D2FF] tracking-wider mb-6">
            <Sparkles size={14} className="animate-pulse" />
            STUNET AI NOW LIVE
          </div>
          <h1 className="hero-title">
            Empower Your <span className="highlight">Learning</span> Journey
          </h1>
          <p className="hero-subtitle">
            Stunet is the ultimate student management platform designed to streamline your academic life. Access resources, track progress, and connect with peers seamlessly.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard">
              <Button 
                variant="primary"
                className={isHovered ? 'hovered' : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">10k+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Colleges</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Stunet Dashboard" className="hero-image" />
          </div>
          <div className="glow-effect"></div>
        </div>
      </section>

      <section className="community-section max-w-6xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-left mb-6">Community Driven <br/><span className="highlight">Collaboration</span></h2>
            <p className="text-[#7A9BB5] mb-8 leading-relaxed">
              Join thousands of students sharing notes, question papers, and academic insights. 
              Our platform thrives on collective knowledge.
            </p>
            <div className="space-y-4">
              {[
                'Access 1000+ verified study notes',
                'Download previous year question papers',
                'Get AI-powered college recommendations',
                'Collaborate with peers from your department'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(0,255,157,0.1)] flex items-center justify-center text-[#00FF9D]">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm font-medium text-[#E8F4FF]">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="activity-card" hoverable={false}>
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Clock size={20} className="text-[#00D2FF]" /> Recent Activity
                </h3>
                <Link to="/notes" className="text-xs text-[#00D2FF] hover:underline">View All</Link>
              </div>
              <div className="space-y-6">
                {RECENT_UPLOADS.map((item) => (
                  <div key={item.id} className="activity-item flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(0,210,255,0.05)] border border-[rgba(0,210,255,0.1)] flex items-center justify-center text-[#00D2FF]">
                        {item.type === 'Note' ? <BookOpen size={18} /> : <MessageSquare size={18} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#E8F4FF] mb-0.5">{item.title}</p>
                        <p className="text-[11px] text-[#7A9BB5]">Uploaded by {item.user}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#4A6480]">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="features-section pb-24">
        <h2 className="section-title text-center mb-16">Why Choose <span className="highlight">Stunet?</span></h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="feature-icon-box mx-auto mb-6 bg-[rgba(0,210,255,0.08)] text-[#00D2FF]">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#E8F4FF]">Smart Repository</h3>
              <p className="text-sm text-[#7A9BB5] leading-relaxed">
                Organized collection of notes and papers filtered by year and department.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="feature-icon-box mx-auto mb-6 bg-[rgba(255,79,163,0.08)] text-[#FF4FA3]">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#E8F4FF]">Peer Network</h3>
              <p className="text-sm text-[#7A9BB5] leading-relaxed">
                Connect with students from top colleges across Maharashtra.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="feature-icon-box mx-auto mb-6 bg-[rgba(0,255,157,0.08)] text-[#00FF9D]">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#E8F4FF]">AI Assistance</h3>
              <p className="text-sm text-[#7A9BB5] leading-relaxed">
                Stunty AI helps you navigate admissions and find the best resources instantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;
