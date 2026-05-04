import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import { Target, Users, Shield, Zap, Globe, Sparkles, ArrowRight, Code, BookOpen, GraduationCap } from 'lucide-react';

const TEAM = [
  { name: 'Yash Kohakade', role: 'Founder & Developer', avatar: 'Y' },
  { name: 'Dev Team', role: 'Backend Engineers', avatar: 'D' },
  { name: 'Design Lead', role: 'UI/UX Designer', avatar: 'U' },
];

const STATS = [
  { label: 'Active Students', value: '10K+', icon: <Users size={20} /> },
  { label: 'Colleges Listed', value: '500+', icon: <GraduationCap size={20} /> },
  { label: 'Notes Shared', value: '1K+', icon: <BookOpen size={20} /> },
  { label: 'Platform Uptime', value: '99.9%', icon: <Code size={20} /> },
];

const WHY = [
  { icon: <Zap size={24} />, title: 'Blazing Fast', desc: 'Built on modern architecture for instant access to notes, papers, and college data.', color: '#f59e0b' },
  { icon: <Shield size={24} />, title: 'Secure & Private', desc: 'Your data is encrypted and protected with industry-standard Supabase security.', color: '#10b981' },
  { icon: <Globe size={24} />, title: 'Community Driven', desc: 'Students upload and share resources, making the platform richer every day.', color: '#3b82f6' },
];

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Hero */}
        <section className="about-hero">
          <div className="page-badge"><Sparkles size={14} /> Empowering the next generation</div>
          <h1 className="page-hero-title" style={{ margin: '0 auto 1.25rem', maxWidth: '640px' }}>
            Our Mission is to <span className="highlight">Simplify</span> Education
          </h1>
          <p className="page-hero-subtitle">
            Stunet is more than a student tool — it's a comprehensive ecosystem bridging the gap between
            students, colleges, and resources in the modern digital age.
          </p>
          <div className="about-hero-actions">
            <Link to="/colleges" className="about-cta-btn primary">
              Explore Colleges <ArrowRight size={18} />
            </Link>
            <Link to="/notes" className="about-cta-btn secondary">
              Browse Notes
            </Link>
          </div>
        </section>

        {/* Stats Banner */}
        <div className="about-stats-banner">
          {STATS.map((stat, i) => (
            <div key={i} className="about-stat-item">
              <div className="about-stat-icon">{stat.icon}</div>
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Values */}
        <div className="about-twin-cards">
          <Card hoverable={false} className="about-vision-card">
            <CardContent className="p-10">
              <div className="about-card-icon-box" style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
                <Target size={28} />
              </div>
              <h2 className="about-card-title">Our Vision</h2>
              <p className="about-card-text">
                To create a world where every student has equal access to high-quality educational
                resources and a seamless platform to collaborate and grow academically — regardless of background.
              </p>
            </CardContent>
          </Card>

          <Card hoverable={false} className="about-vision-card">
            <CardContent className="p-10">
              <div className="about-card-icon-box" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>
                <Users size={28} />
              </div>
              <h2 className="about-card-title">Our Values</h2>
              <p className="about-card-text">
                Transparency, accessibility, and community. We build tools that put students first,
                ensuring information flows freely and securely within our growing ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Stunet */}
        <section className="about-why-section">
          <h2 className="section-title-sm" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose <span className="highlight">Stunet?</span>
          </h2>
          <div className="about-why-grid">
            {WHY.map((item, i) => (
              <div key={i} className="about-why-card">
                <div className="about-why-icon" style={{ color: item.color, background: `${item.color}18` }}>
                  {item.icon}
                </div>
                <h3 className="about-why-title">{item.title}</h3>
                <p className="about-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="about-team-section">
          <h2 className="section-title-sm" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '3rem' }}>
            Meet the <span className="highlight">Team</span>
          </h2>
          <div className="about-team-grid">
            {TEAM.map((member, i) => (
              <Card key={i} hoverable={false} className="about-team-card">
                <CardContent className="p-8 text-center">
                  <div className="about-team-avatar">{member.avatar}</div>
                  <h4 className="about-team-name">{member.name}</h4>
                  <p className="about-team-role">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};

export default About;
