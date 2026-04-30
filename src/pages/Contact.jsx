import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <main style={{ padding: '6rem 3rem', maxWidth: '800px', margin: '0 auto', flex: 1, width: '100%' }}>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Get in <span className="highlight">Touch</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text)', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Have questions about Stunet? Our team is here to help you.
      </p>
      
      <Card style={{ padding: '3rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--text-h)', textAlign: 'left' }}>Name</label>
            <input type="text" id="name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)' }} placeholder="Your name" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text-h)', textAlign: 'left' }}>Email</label>
            <input type="email" id="email" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)' }} placeholder="your.email@example.com" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--text-h)', textAlign: 'left' }}>Message</label>
            <textarea id="message" rows="5" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
          </div>
          <Button type="button" variant="primary" style={{ marginTop: '1rem', width: '100%' }}>Send Message</Button>
        </form>
      </Card>
    </main>
  );
};

export default Contact;
