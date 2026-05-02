import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { BarChart2, Calendar, CheckCircle, Clock, BookOpen, ExternalLink } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const userName = user?.name?.split(' ')[0] || 'Student';

  const stats = [
    { label: 'Current GPA', value: '3.8', icon: <BarChart2 size={20} />, color: '#3b82f6' },
    { label: 'Credits Done', value: '84', icon: <CheckCircle size={20} />, color: '#10b981' },
    { label: 'Deadlines', value: '3', icon: <Clock size={20} />, color: '#f59e0b' },
    { label: 'Avg Attendance', value: '92%', icon: <Calendar size={20} />, color: '#8b5cf6' },
  ];

  const recentCourses = [
    { name: 'Advanced Algorithms', instructor: 'Prof. Smith', schedule: 'Mon/Wed', progress: 75 },
    { name: 'Web Development II', instructor: 'Dr. Johnson', schedule: 'Tue/Thu', progress: 40 },
    { name: 'Database Systems', instructor: 'Prof. Davis', schedule: 'Fri', progress: 90 },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-title">
              Student <span className="highlight">Dashboard</span>
            </h1>
            <p className="dashboard-subtitle">Welcome back, {userName}! Here is your academic overview.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Download Report</Button>
            <Button variant="primary">+ Upload Work</Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">{stat.label}</p>
                    <p className="text-3xl font-extrabold text-[var(--text-h)]">{stat.value}</p>
                  </div>
                  <div style={{ color: stat.color }} className="opacity-80">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="section-title">My Current Courses</h2>
            <div className="space-y-4">
              {recentCourses.map((course, idx) => (
                <Card key={idx} className="course-progress-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-[var(--text-h)]">{course.name}</h4>
                        <p className="text-sm opacity-60">{course.instructor} • {course.schedule}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2">
                        Resource <ExternalLink size={14} />
                      </Button>
                    </div>
                    <div className="progress-container">
                      <div className="progress-info">
                        <span className="text-xs font-bold">Progress</span>
                        <span className="text-xs font-bold">{course.progress}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Announcements & Quick Actions */}
          <div className="space-y-8">
            <section>
              <h2 className="section-title">Announcements</h2>
              <Card className="announcement-card" hoverable={false}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-bg text-accent rounded-lg">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Final Project Update</h4>
                      <p className="text-xs opacity-70 leading-relaxed">
                        The final deadline for the web engineering group project has been extended to Friday.
                      </p>
                      <span className="text-[10px] font-bold text-accent mt-3 block">2 hours ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="section-title">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <BarChart2 size={24} /> <span>Grades</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <Calendar size={24} /> <span>Schedule</span>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
