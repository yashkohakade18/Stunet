import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

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
          <div className="contact-info-section">
            <h1 className="contact-title">
              Let's <span className="highlight">Talk</span>
            </h1>
            <p className="contact-subtitle">
              Have a suggestion, a bug report, or just want to say hi? We'd love to hear from you. 
              Our team usually responds within 24 hours.
            </p>

            <div className="contact-methods">
              {[
                { icon: <Mail size={24} />, label: 'Email Us', value: 'support@stunet.edu.in' },
                { icon: <Phone size={24} />, label: 'Call Us', value: '+91 20 8888 7777' },
                { icon: <MapPin size={24} />, label: 'Visit Us', value: 'Education Hub, Pune - 411001' }
              ].map((method, idx) => (
                <div key={idx} className="method-item">
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="method-label">{method.label}</h4>
                    <p className="method-value">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="contact-form-card" hoverable={false}>
            <CardContent className="p-8 md:p-12">
              <div className="form-header">
                <div className="form-icon-circle">
                  <MessageSquare size={20} />
                </div>
                <h2 className="form-title">Send a Message</h2>
              </div>

              {status === 'success' ? (
                <div className="success-state">
                  <div className="success-icon-circle">
                    <Send size={32} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <Input 
                    label="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    icon={User}
                  />
                  <Input 
                    label="Email Address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    icon={Mail}
                  />
                  <div className="form-group">
                    <label className="input-label">Your Message</label>
                    <textarea 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help you?"
                      className="contact-textarea"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full gap-3"
                    isLoading={status === 'sending'}
                  >
                    <Send size={20} /> Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
