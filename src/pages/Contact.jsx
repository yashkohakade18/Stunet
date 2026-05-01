import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              Let's <span className="highlight">Talk</span>
            </h1>
            <p className="text-var(--text) text-lg mb-12">
              Have a suggestion, a bug report, or just want to say hi? We'd love to hear from you. 
              Our team usually responds within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-accent-bg rounded-2xl text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-var(--text-h)">Email Us</h4>
                  <p className="text-var(--text)">support@stunet.edu.in</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-4 bg-accent-bg rounded-2xl text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-var(--text-h)">Call Us</h4>
                  <p className="text-var(--text)">+91 20 8888 7777</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-4 bg-accent-bg rounded-2xl text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-var(--text-h)">Visit Us</h4>
                  <p className="text-var(--text)">Education Hub, Knowledge Park, Pune - 411001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="p-8 md:p-12" glass={true}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-2xl font-bold text-var(--text-h)">Send a Message</h2>
            </div>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-var(--text-h)">Message Sent!</h3>
                <p className="text-var(--text)">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-var(--text-h) mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-black/10 border border-var(--border) rounded-2xl outline-none focus:border-accent text-var(--text-h)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-var(--text-h) mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full px-5 py-4 bg-black/10 border border-var(--border) rounded-2xl outline-none focus:border-accent text-var(--text-h)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-var(--text-h) mb-2 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your query..."
                    className="w-full px-5 py-4 bg-black/10 border border-var(--border) rounded-2xl outline-none focus:border-accent text-var(--text-h) resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-3 py-5"
                  isLoading={status === 'sending'}
                >
                  <Send size={20} /> Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
