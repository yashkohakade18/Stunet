import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { BarChart2, Calendar, CheckCircle, Clock, BookOpen, ExternalLink, TrendingUp, Award, Zap, Bell, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const userName = user?.name?.split(' ')[0] || 'Student';

  const stats = [
    { label: 'Current GPA', value: '3.8', sub: '+0.2 this sem', icon: <BarChart2 size={20} />, color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
    { label: 'Credits Done', value: '84', sub: '120 total', icon: <CheckCircle size={20} />, color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
    { label: 'Deadlines', value: '3', sub: 'this week', icon: <Clock size={20} />, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    { label: 'Attendance', value: '92%', sub: 'above average', icon: <Calendar size={20} />, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  ];

  const recentCourses = [
    { name: 'Advanced Algorithms', instructor: 'Prof. Smith', schedule: 'Mon/Wed', progress: 75, color: '#a855f7' },
    { name: 'Web Development II', instructor: 'Dr. Johnson', schedule: 'Tue/Thu', progress: 40, color: '#3b82f6' },
    { name: 'Database Systems', instructor: 'Prof. Davis', schedule: 'Fri', progress: 90, color: '#10b981' },
  ];

  const deadlines = [
    { title: 'Algorithm Assignment', course: 'Adv. Algorithms', due: 'Tomorrow', priority: 'high' },
    { title: 'DB Project Phase 2', course: 'Database Systems', due: 'May 10', priority: 'medium' },
    { title: 'Web Portfolio', course: 'Web Dev II', due: 'May 15', priority: 'low' },
  ];

  const quickActions = [
    { icon: <BookOpen size={22} />, label: 'Notes', to: '/notes', color: '#a855f7' },
    { icon: <FileText size={22} />, label: 'Papers', to: '/papers', color: '#3b82f6' },
    { icon: <Award size={22} />, label: 'Colleges', to: '/colleges', color: '#10b981' },
    { icon: <TrendingUp size={22} />, label: 'Rounds', to: '/rounds', color: '#f59e0b' },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <div className="dashboard-greeting-badge">
              <Zap size={14} /> Good morning
            </div>
            <h1 className="dashboard-title">
              Welcome back, <span className="highlight">{userName}</span>!
            </h1>
            <p className="dashboard-subtitle">Here's your academic overview for today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="gap-2"><Bell size={16} /> Alerts</Button>
            <Button variant="primary" className="gap-2"><TrendingUp size={16} /> View Progress</Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="dashboard-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="dashboard-stat-card" style={{ '--stat-color': stat.color, '--stat-bg': stat.bg }}>
              <div className="stat-icon-box" style={{ background: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <p className="stat-label-text">{stat.label}</p>
                <p className="stat-value-text">{stat.value}</p>
                <p className="stat-sub-text">{stat.sub}</p>
              </div>
              <div className="stat-trend-line" style={{ background: stat.color }}></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Courses + Deadlines */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses */}
            <section>
              <div className="section-row-header">
                <h2 className="section-title-sm">Active Courses</h2>
                <button className="see-all-btn">See all <ChevronRight size={14} /></button>
              </div>
              <div className="space-y-4">
                {recentCourses.map((course, idx) => (
                  <div key={idx} className="course-card-row">
                    <div className="course-color-bar" style={{ background: course.color }}></div>
                    <div className="course-card-body">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="course-name">{course.name}</h4>
                          <p className="course-meta">{course.instructor} · {course.schedule}</p>
                        </div>
                        <span className="course-progress-badge" style={{ color: course.color, background: `${course.color}15` }}>
                          {course.progress}%
                        </span>
                      </div>
                      <div className="course-progress-track">
                        <div className="course-progress-fill" style={{ width: `${course.progress}%`, background: course.color }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deadlines */}
            <section>
              <div className="section-row-header">
                <h2 className="section-title-sm">Upcoming Deadlines</h2>
              </div>
              <Card hoverable={false}>
                <CardContent className="p-0">
                  {deadlines.map((d, idx) => (
                    <div key={idx} className="deadline-row">
                      <div className={`deadline-priority-dot ${d.priority}`}></div>
                      <div className="flex-1">
                        <p className="deadline-title">{d.title}</p>
                        <p className="deadline-course">{d.course}</p>
                      </div>
                      <span className={`deadline-due ${d.priority}`}>{d.due}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Right: Quick Actions + Announcement */}
          <div className="space-y-8">
            <section>
              <h2 className="section-title-sm">Quick Access</h2>
              <div className="quick-actions-grid">
                {quickActions.map((action, idx) => (
                  <Link to={action.to} key={idx} className="quick-action-card" style={{ '--qa-color': action.color }}>
                    <div className="qa-icon" style={{ color: action.color, background: `${action.color}15` }}>
                      {action.icon}
                    </div>
                    <span className="qa-label">{action.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-title-sm">Announcements</h2>
              <Card hoverable={false} className="announcement-card">
                <CardContent className="p-5">
                  <div className="announcement-badge">NEW</div>
                  <h4 className="announcement-title">Final Project Deadline Extended</h4>
                  <p className="announcement-body">
                    The final deadline for the web engineering group project has been extended to Friday, May 9th.
                  </p>
                  <span className="announcement-time">2 hours ago</span>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
