import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import { CAP_ROUNDS, CUTOFFS } from '../data/rounds';
import { COLLEGES } from '../data/colleges';

export default function Rounds() {
  const getCollegeName = (id) => COLLEGES.find(c => c.id === id)?.name || 'Unknown College';

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Admission <span className="highlight">Rounds</span>
          </h1>
          <p style={{ color: 'var(--text)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Track your admission process, check cutoffs, and stay updated with the latest CAP rounds.
          </p>
        </header>

        {/* Timeline Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-h)', marginBottom: '2rem', textAlign: 'center' }}>
            CAP Schedule 2024
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {CAP_ROUNDS.map((round) => (
              <Card key={round.id} style={{ 
                padding: '2rem', 
                borderTop: round.status === 'active' ? '4px solid var(--accent)' : 'none',
                opacity: round.status === 'closed' ? 0.7 : 1,
                position: 'relative'
              }}>
                {round.status === 'active' && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    background: 'var(--accent)', 
                    color: 'black', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 700 
                  }}>
                    LIVE
                  </span>
                )}
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-h)', marginBottom: '0.5rem' }}>{round.name}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {new Date(round.startDate).toLocaleDateString()} - {new Date(round.endDate).toLocaleDateString()}
                </p>
                <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {round.description}
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: round.status === 'closed' ? '#ef4444' : round.status === 'active' ? '#10b981' : '#f59e0b' 
                  }} />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)' }}>
                    {round.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Cutoff Section */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-h)' }}>
              Previous <span className="highlight">Cutoffs</span>
            </h2>
          </div>
          
          <Card style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                  <tr>
                    <th style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>College</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Branch</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Round</th>
                    <th style={{ padding: '1.25rem', color: 'var(--accent)', fontWeight: 700, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>OPEN</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>OBC</th>
                    <th style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>SC/ST</th>
                  </tr>
                </thead>
                <tbody>
                  {CUTOFFS.map((cutoff, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }} 
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '1.25rem', color: 'var(--text-h)', fontWeight: 500 }}>{getCollegeName(cutoff.collegeId)}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--text)' }}>{cutoff.branch}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--text)' }}>Round {cutoff.round}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--accent)', fontWeight: 700 }}>{cutoff.OPEN}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--text)' }}>{cutoff.OBC}</td>
                      <td style={{ padding: '1.25rem', color: 'var(--text)' }}>{cutoff.SC} / {cutoff.ST}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </PageWrapper>
  );
}
