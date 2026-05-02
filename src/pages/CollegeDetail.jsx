import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { COLLEGES } from '../data/colleges';
import { MapPin, Globe, Phone, Mail, GraduationCap, Star, BookOpen, Users, MessageSquare } from 'lucide-react';
import ReviewCard from '../components/college/ReviewCard';

export default function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <GraduationCap size={18} /> },
    { id: 'courses', label: 'Courses & Fees', icon: <BookOpen size={18} /> },
    { id: 'reviews', label: 'Reviews', icon: <MessageSquare size={18} /> },
    { id: 'stats', label: 'Statistics', icon: <Users size={18} /> }
  ];

  useEffect(() => {
    const found = COLLEGES.find(c => c.id === id);
    setCollege(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!college) {
    return (
      <PageWrapper>
        <div className="flex flex-col items-center justify-center py-24">
          <h2 className="text-2xl font-bold mb-4">College not found</h2>
          <Link to="/colleges"><Button>Back to List</Button></Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-3xl overflow-hidden h-[300px] md:h-[400px]">
          <img 
            src={`https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`} 
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 md:p-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                  {college.type}
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="text-white font-bold">{college.rating || '4.5'}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {college.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-accent" />
                  <span>{college.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-accent" />
                  <span>Est. {college.established || '1960'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs Navigation */}
            <div className="tabs-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <Card className="detail-card">
              <CardContent>
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-fade-in">
                    <section>
                      <h2 className="detail-section-title">About College</h2>
                      <p className="detail-text">
                        {college.description || `The ${college.name} is one of the premier educational institutions in ${college.location}. 
                        Known for its excellence in engineering and technology, the college has been a hub for innovation and 
                        academic brilliance for decades.`}
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="detail-section-title">Infrastructure</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Wi-Fi Campus', 'Modern Labs', 'Central Library', 'Hostel', 'Sports Complex', 'Cafeteria'].map(item => (
                          <div key={item} className="infra-tag">
                            <div className="dot green"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="detail-section-title">Available Branches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {college.branches?.map((branch, idx) => (
                        <Card key={idx} hoverable={false} className="course-card">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent-bg rounded-lg flex items-center justify-center text-accent">
                              <BookOpen size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold">{branch}</h4>
                              <p className="text-xs opacity-70">Duration: 4 Years</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <h2 className="detail-section-title">Student Reviews</h2>
                      <Button variant="outline" size="sm">Write a Review</Button>
                    </div>
                    <div className="space-y-4">
                      {[
                        { user: 'Rahul Sharma', date: '2 days ago', rating: 5, comment: 'Excellent infrastructure and faculty. The placement cell is very active and helpful.' },
                        { user: 'Sneha Patil', date: '1 week ago', rating: 4, comment: 'Great campus life, but the canteen food could be better.' },
                        { user: 'Amit Verma', date: '2 weeks ago', rating: 4, comment: 'Very competitive environment which keeps you motivated.' }
                      ].map((review, idx) => (
                        <ReviewCard key={idx} review={review} />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-8 animate-fade-in">
                    <h2 className="detail-section-title">Key Statistics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: <Users size={20} />, label: 'Students', value: '5000+' },
                        { icon: <GraduationCap size={20} />, label: 'Placements', value: '92%' },
                        { icon: <Star size={20} />, label: 'NIRF Rank', value: '#42' },
                        { icon: <BookOpen size={20} />, label: 'Faculty', value: '250+' },
                      ].map((stat, idx) => (
                        <div key={idx} className="stat-box text-center p-4 rounded-xl border border-[var(--border)]">
                          <div className="text-accent mb-2 flex justify-center">{stat.icon}</div>
                          <div className="text-xl font-extrabold">{stat.value}</div>
                          <div className="text-[10px] opacity-60 uppercase tracking-widest">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-var(--text-h)">Admission Info</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-bottom border-var(--border)">
                  <span className="text-var(--text)">Min CET Score</span>
                  <span className="font-bold text-accent">{college.minCET}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-bottom border-var(--border)">
                  <span className="text-var(--text)">Avg. Fees</span>
                  <span className="font-bold text-var(--text-h)">₹{college.fees.toLocaleString()}/yr</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-bottom border-var(--border)">
                  <span className="text-var(--text)">Placement Package</span>
                  <span className="font-bold text-green-500">8.5 LPA</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">Apply Now</Button>
                <Button variant="secondary" className="w-full">Download Brochure</Button>
              </div>

              <div className="mt-8 pt-8 border-top border-var(--border) space-y-4">
                <h4 className="font-bold text-sm text-var(--text-h)">Contact Details</h4>
                <div className="flex items-center gap-3 text-sm text-var(--text)">
                  <Globe size={16} />
                  <a href="#" className="hover:text-accent">www.{college.name.toLowerCase().replace(/\s/g, '')}.edu</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-var(--text)">
                  <Phone size={16} />
                  <span>+91 20 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-var(--text)">
                  <Mail size={16} />
                  <span>admissions@{college.name.toLowerCase().replace(/\s/g, '')}.edu</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
