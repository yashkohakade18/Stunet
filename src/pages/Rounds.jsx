import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import { CAP_ROUNDS, CUTOFFS } from '../data/rounds';
import { COLLEGES } from '../data/colleges';
import { Calendar, CheckCircle2, Clock, AlertCircle, ChevronDown } from 'lucide-react';

const statusConfig = {
  closed: { icon: <CheckCircle2 size={14} />, color: '#ef4444', bg: 'rgba(239,68,68,0.1)', label: 'Closed' },
  active: { icon: <Clock size={14} />, color: '#10b981', bg: 'rgba(16,185,129,0.1)', label: 'Live Now' },
  upcoming: { icon: <AlertCircle size={14} />, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', label: 'Upcoming' },
};

export default function Rounds() {
  const [expandedRound, setExpandedRound] = useState(null);
  const getCollegeName = (id) => COLLEGES.find(c => c.id === id)?.name || 'Unknown College';

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="page-header-centered">
          <div className="page-badge">
            <Calendar size={14} /> CAP 2024
          </div>
          <h1 className="page-hero-title">
            Admission <span className="highlight">Rounds</span>
          </h1>
          <p className="page-hero-subtitle">
            Track your admission process, check cutoffs, and stay updated with the latest CAP rounds.
          </p>
        </header>

        {/* Timeline */}
        <div className="rounds-timeline">
          {CAP_ROUNDS.map((round, idx) => {
            const cfg = statusConfig[round.status] || statusConfig.upcoming;
            const isActive = round.status === 'active';
            return (
              <div key={round.id} className={`round-card ${isActive ? 'round-card-active' : ''}`}>
                <div className="round-number">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="round-content">
                  <div className="round-top-row">
                    <h3 className="round-name">{round.name}</h3>
                    <span className="round-status-pill" style={{ color: cfg.color, background: cfg.bg }}>
                      {cfg.icon} {cfg.label}
                    </span>
                  </div>
                  <p className="round-dates" style={{ color: 'var(--accent)' }}>
                    {new Date(round.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} –{' '}
                    {new Date(round.endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <p className="round-desc">{round.description}</p>
                </div>
                {isActive && <div className="round-live-pulse"></div>}
              </div>
            );
          })}
        </div>

        {/* Cutoffs Table */}
        <section className="cutoffs-section">
          <div className="section-row-header mb-6">
            <div>
              <h2 className="section-title-sm" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
                Previous Year <span className="highlight">Cutoffs</span>
              </h2>
              <p style={{ color: 'var(--text)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Category-wise CET score cutoffs from 2023</p>
            </div>
          </div>

          <Card hoverable={false} className="cutoffs-table-card">
            <CardContent className="p-0">
              <div className="table-scroll-wrapper">
                <table className="cutoffs-table">
                  <thead>
                    <tr>
                      <th>College</th>
                      <th>Branch</th>
                      <th>Round</th>
                      <th className="text-accent">OPEN</th>
                      <th>OBC</th>
                      <th>SC / ST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CUTOFFS.map((cutoff, idx) => (
                      <tr key={idx} className="cutoff-row">
                        <td className="cutoff-college-name">{getCollegeName(cutoff.collegeId)}</td>
                        <td className="cutoff-branch">{cutoff.branch}</td>
                        <td><span className="round-badge">Rd {cutoff.round}</span></td>
                        <td className="cutoff-open">{cutoff.OPEN}</td>
                        <td className="cutoff-other">{cutoff.OBC}</td>
                        <td className="cutoff-other">{cutoff.SC} / {cutoff.ST}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageWrapper>
  );
}
