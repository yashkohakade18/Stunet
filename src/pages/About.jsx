import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import { Target, Users, Shield, Zap, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-bg rounded-full text-accent text-sm font-bold mb-6">
            <Sparkles size={16} /> Empowering the next generation
          </div>
          <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
            Our Mission is to <br />
            <span className="highlight">Simplify Education</span>
          </h1>
          <p className="text-var(--text) text-xl max-w-3xl mx-auto leading-relaxed">
            Stunet is more than just a management system. It's a comprehensive ecosystem designed to 
            bridge the gap between students, educators, and resources in the modern digital age.
          </p>
        </section>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card className="p-12 bg-accent-bg border-accent-border relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-accent/10 group-hover:scale-110 transition-transform">
              <Target size={200} />
            </div>
            <h2 className="text-3xl font-extrabold text-var(--text-h) mb-6">Our Vision</h2>
            <p className="text-lg text-var(--text) leading-relaxed">
              To create a world where every student has equal access to high-quality educational resources 
              and a seamless platform to collaborate and grow academically, regardless of their location.
            </p>
          </Card>
          <Card className="p-12 relative overflow-hidden group">
             <div className="absolute -right-8 -top-8 text-accent/10 group-hover:scale-110 transition-transform">
              <Users size={200} />
            </div>
            <h2 className="text-3xl font-extrabold text-var(--text-h) mb-6">Our Values</h2>
            <p className="text-lg text-var(--text) leading-relaxed">
              Transparency, accessibility, and community. We build tools that put users first, ensuring that 
              information flows freely and securely within the academic ecosystem.
            </p>
          </Card>
        </div>

        {/* Why Stunet? */}
        <section className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-16 text-var(--text-h)">Why Choose Stunet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-accent-bg rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-var(--text-h)">{feature.title}</h3>
                <p className="text-var(--text) leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team / Stats */}
        <Card className="p-16 text-center bg-black/5" hoverable={false}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Active Students', value: '10K+' },
              { label: 'Colleges Enrolled', value: '50+' },
              { label: 'Notes Uploaded', value: '5K+' },
              { label: 'Uptime', value: '99.9%' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-extrabold text-accent mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-var(--text) uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default About;
