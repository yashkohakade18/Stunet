import React from 'react';
import { useAuth } from '../context/AuthContext';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { User, Mail, Calendar, Settings, Shield, Bell, Heart, BookOpen } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  const activities = [
    { id: 1, type: 'favorite', title: 'Added COEP to favorites', date: '2 hours ago', icon: <Heart size={14} className="text-red-500" /> },
    { id: 2, type: 'note', title: 'Downloaded Mechanical Engineering Notes', date: '1 day ago', icon: <BookOpen size={14} className="text-blue-500" /> },
    { id: 3, type: 'system', title: 'Updated profile picture', date: '3 days ago', icon: <User size={14} className="text-green-500" /> },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="profile-sidebar-card" hoverable={false}>
              <CardContent className="p-6 text-center">
                <div className="profile-avatar-large">
                  {user.name.charAt(0)}
                </div>
                <h2 className="text-xl font-bold mt-4 text-[var(--text-h)]">{user.name}</h2>
                <p className="text-sm text-[var(--text)] mb-6">{user.role || 'Student'}</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                    <Settings size={14} /> Edit Profile
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-red-500 hover:bg-red-50/10">
                    <Shield size={14} /> Security
                  </Button>
                </div>
              </CardContent>
            </Card>

            <nav className="profile-nav-menu">
              <button className="nav-item active"><User size={18} /> Account info</button>
              <button className="nav-item"><Bell size={18} /> Notifications</button>
              <button className="nav-item"><Heart size={18} /> Saved Items</button>
              <button className="nav-item"><Settings size={18} /> Settings</button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="profile-main-card" hoverable={false}>
              <CardHeader>
                <h3 className="text-xl font-bold">Personal Information</h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="info-group">
                    <label className="info-label">Full Name</label>
                    <div className="info-value flex items-center gap-2">
                      <User size={16} className="opacity-40" /> {user.name}
                    </div>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Email Address</label>
                    <div className="info-value flex items-center gap-2">
                      <Mail size={16} className="opacity-40" /> {user.email}
                    </div>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Joined Stunet</label>
                    <div className="info-value flex items-center gap-2">
                      <Calendar size={16} className="opacity-40" /> May 2026
                    </div>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Student Status</label>
                    <div className="info-value">
                      <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-xs font-bold">Verified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="profile-activity-card" hoverable={false}>
              <CardHeader>
                <h3 className="text-xl font-bold">Recent Activity</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-[var(--border)]">
                  {activities.map(activity => (
                    <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-[var(--social-bg)] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="activity-icon-circle">
                          {activity.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-h)]">{activity.title}</p>
                          <p className="text-xs text-[var(--text)] opacity-60">{activity.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
