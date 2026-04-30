import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Dashboard = () => {
  return (
    <main style={{ padding: '2rem 3rem', flex: 1, background: 'var(--bg)' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Student <span className="highlight">Dashboard</span></h1>
          <p style={{ color: 'var(--text)', fontSize: '1.1rem' }}>Welcome back, Alex! Here is your academic overview.</p>
        </div>
        <Button variant="primary">+ Upload Assignment</Button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <Card style={{ padding: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Current GPA</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-h)' }}>3.8</p>
        </Card>
        <Card style={{ padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Completed Credits</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-h)' }}>84</p>
        </Card>
        <Card style={{ padding: '1.5rem', borderLeft: '4px solid #f59e0b' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Upcoming Deadlines</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-h)' }}>3</p>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-h)', marginBottom: '1.5rem' }}>Recent Courses</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Advanced Algorithms', 'Web Development II', 'Database Management', 'UI/UX Design Principles'].map((course, idx) => (
              <Card key={idx} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-h)' }}>{course}</h4>
                  <p style={{ color: 'var(--text)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Prof. Smith &bull; Mon/Wed</p>
                </div>
                <Button variant="secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View Resources</Button>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-h)', marginBottom: '1.5rem' }}>Announcements</h2>
          <Card style={{ padding: '1.5rem', background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-h)', marginBottom: '0.5rem' }}>End of Semester Project</h4>
            <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              The final deadline for the web engineering group project has been extended to Friday. Ensure all code is pushed to the repository.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '1rem', fontWeight: 600 }}>2 hours ago</p>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
