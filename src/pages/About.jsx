import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import { Target, Users, Shield, Zap, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <section className="about-hero">
          <div className="about-badge">
            <Sparkles size={16} /> Empowering the next generation
          </div>
          <h1 className="about-title">
            Our Mission is to <br />
            <span className="highlight">Simplify Education</span>
          </h1>
          <p className="about-subtitle">
            Stunet is more than just a management system. It's a comprehensive ecosystem designed to 
            bridge the gap between students, educators, and resources in the modern digital age.
          </p>
        </section>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <Card className="vision-card" hoverable={true}>
            <CardContent className="p-12 relative overflow-hidden group">
              <div className="vision-bg-icon">
                <Target size={180} />
              </div>
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-text">
                To create a world where every student has equal access to high-quality educational resources 
                and a seamless platform to collaborate and grow academically.
              </p>
            </CardContent>
          </Card>
          
          <Card className="values-card" hoverable={true}>
            <CardContent className="p-12 relative overflow-hidden group">
               <div className="vision-bg-icon">
                <Users size={180} />
              </div>
              <h2 className="vision-title">Our Values</h2>
              <p className="vision-text">
                Transparency, accessibility, and community. We build tools that put users first, ensuring that 
                information flows freely and securely within the ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Stunet? */}
        <section className="mb-24">
          <h2 className="section-title text-center text-3xl mb-16">Why Choose Stunet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Zap />, 
                title: 'Blazing Fast', 
                desc: 'Powered by modern architecture ensuring instant access to your notes and dashboards.' 
              },
              { 
                icon: <Shield />, 
                title: 'Secure & Private', 
                desc: 'Your data is encrypted and protected with industry-standard security protocols.' 
              },
              { 
                icon: <Globe />, 
                title: 'Collaborative', 
                desc: 'Connect with peers from different branches and colleges in a shared learning space.' 
              }
            ].map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon-box">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team / Stats */}
        <Card className="stats-container-card" hoverable={false}>
          <CardContent className="p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Active Students', value: '10K+' },
                { label: 'Colleges Enrolled', value: '50+' },
                { label: 'Notes Uploaded', value: '5K+' },
                { label: 'Uptime', value: '99.9%' }
              ].map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default About;
