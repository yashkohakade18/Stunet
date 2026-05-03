import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Card, { CardContent } from '../components/ui/Card';
import { useColleges } from '../hooks/useColleges';
import { MapPin, Globe, Phone, Mail, GraduationCap, Star, BookOpen, Users, MessageSquare, IndianRupee, ArrowLeft, Heart, CheckCircle } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

const reviews = [
  { user: 'Rahul S.', avatar: 'R', date: '2 days ago', rating: 5, comment: 'Excellent infrastructure and faculty. The placement cell is very active and helpful. Definitely worth the admission hassle.' },
  { user: 'Sneha P.', avatar: 'S', date: '1 week ago', rating: 4, comment: 'Great campus life, but the canteen food could be better. Academic quality is top notch.' },
  { user: 'Amit V.', avatar: 'A', date: '2 weeks ago', rating: 4, comment: 'Very competitive environment which keeps you motivated throughout the semester.' },
];

export default function CollegeDetail() {
  const { id } = useParams();
  const { getCollege } = useColleges();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <GraduationCap size={16} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={16} /> },
    { id: 'reviews', label: 'Reviews', icon: <MessageSquare size={16} /> },
    { id: 'stats', label: 'Statistics', icon: <Users size={16} /> },
  ];

  useEffect(() => {
    const found = getCollege(id);
    setCollege(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!college) {
    return (
      <PageWrapper>
        <div className="detail-not-found">
          <GraduationCap size={64} className="opacity-20" />
          <h2>College not found</h2>
          <Link to="/colleges" className="back-btn"><ArrowLeft size={18} /> Back to List</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Nav */}
        <Link to="/colleges" className="detail-back-nav">
          <ArrowLeft size={18} /> All Colleges
        </Link>

        {/* Hero Banner */}
        <div className="college-hero-banner">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
            alt={college.name}
            className="college-hero-img"
          />
          <div className="college-hero-overlay">
            <div className="college-hero-meta">
              <div className="flex items-center gap-3 mb-4">
                <span className="college-type-badge">{college.type}</span>
                {college.naac && <span className="college-naac-badge">NAAC {college.naac}</span>}
              </div>
              <h1 className="college-hero-name">{college.name}</h1>
              <div className="college-hero-info">
                <span><MapPin size={16} /> {college.location}</span>
                <span><GraduationCap size={16} /> Est. {college.estYear}</span>
                <span><Star size={16} fill="currentColor" className="text-yellow-400" /> {college.rating || '4.5'} / 5.0</span>
              </div>
            </div>
            <button
              onClick={() => toggleFavorite(college.id)}
              className={`hero-fav-btn ${isFavorite(college.id) ? 'active' : ''}`}
            >
              <Heart size={20} fill={isFavorite(college.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="college-detail-layout">
          {/* Main Content */}
          <div className="college-detail-main">
            {/* Tabs */}
            <div className="detail-tabs-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`detail-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <Card hoverable={false} className="detail-tab-content-card">
              <CardContent className="p-8">
                {activeTab === 'overview' && (
                  <div className="tab-content animate-fade-in">
                    <section className="detail-section">
                      <h2 className="detail-section-title">About the College</h2>
                      <p className="detail-text">
                        {`${college.name} is one of the premier educational institutions in ${college.location}. Known for its excellence in engineering and technology, the college has been a hub for innovation and academic brilliance for decades. With a strong alumni network and industry connections, it ensures excellent career opportunities for its graduates.`}
                      </p>
                    </section>
                    <section className="detail-section">
                      <h2 className="detail-section-title">Infrastructure & Facilities</h2>
                      <div className="infra-grid">
                        {['Wi-Fi Campus', 'Modern Labs', 'Central Library', 'Hostel', 'Sports Complex', 'Cafeteria', 'Auditorium', 'Medical Center'].map(item => (
                          <div key={item} className="infra-tag-item">
                            <CheckCircle size={16} className="text-green-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="tab-content animate-fade-in">
                    <h2 className="detail-section-title">Available Branches</h2>
                    <div className="branches-grid">
                      {(college.branches || ['Computer Engineering', 'IT', 'Mechanical', 'Civil']).map((branch, idx) => (
                        <div key={idx} className="branch-card-item">
                          <div className="branch-icon-box">
                            <BookOpen size={20} />
                          </div>
                          <div>
                            <h4 className="branch-name">{branch}</h4>
                            <p className="branch-meta">B.E · 4 Years · 60 Seats</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="tab-content animate-fade-in">
                    <div className="reviews-header">
                      <div>
                        <h2 className="detail-section-title" style={{ margin: 0 }}>Student Reviews</h2>
                        <p style={{ color: 'var(--text)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                          {reviews.length} verified reviews
                        </p>
                      </div>
                      <button className="write-review-btn">Write a Review</button>
                    </div>
                    <div className="reviews-list">
                      {reviews.map((review, idx) => (
                        <div key={idx} className="review-card-item">
                          <div className="review-header-row">
                            <div className="review-avatar">{review.avatar}</div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <strong className="review-user">{review.user}</strong>
                                <span className="review-date">{review.date}</span>
                              </div>
                              <div className="review-stars">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={12} fill={i < review.rating ? '#f59e0b' : 'none'} className={i < review.rating ? 'text-yellow-400' : 'text-gray-400'} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="tab-content animate-fade-in">
                    <h2 className="detail-section-title">Key Statistics</h2>
                    <div className="stats-boxes-grid">
                      {[
                        { icon: <Users size={24} />, label: 'Students Enrolled', value: '5,000+', color: '#a855f7' },
                        { icon: <GraduationCap size={24} />, label: 'Placement Rate', value: '92%', color: '#10b981' },
                        { icon: <Star size={24} />, label: 'NIRF Rank', value: '#42', color: '#f59e0b' },
                        { icon: <BookOpen size={24} />, label: 'Faculty Members', value: '250+', color: '#3b82f6' },
                      ].map((stat, idx) => (
                        <div key={idx} className="stat-box-item" style={{ '--sb-color': stat.color }}>
                          <div className="stat-box-icon" style={{ color: stat.color, background: `${stat.color}15` }}>{stat.icon}</div>
                          <div className="stat-box-value">{stat.value}</div>
                          <div className="stat-box-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="college-detail-sidebar">
            <div className="sidebar-admission-card">
              <h3 className="sidebar-card-title">Admission Info</h3>

              <div className="admission-info-list">
                <div className="admission-info-row">
                  <span className="ai-label">Min CET Score</span>
                  <span className="ai-value accent">{college.minCET} %ile</span>
                </div>
                <div className="admission-info-row">
                  <span className="ai-label">Max CET Score</span>
                  <span className="ai-value">{college.maxCET} %ile</span>
                </div>
                <div className="admission-info-row">
                  <span className="ai-label">Annual Fees</span>
                  <span className="ai-value">₹{college.fees?.toLocaleString()}/yr</span>
                </div>
                <div className="admission-info-row">
                  <span className="ai-label">Avg. Package</span>
                  <span className="ai-value green">8.5 LPA</span>
                </div>
              </div>

              <div className="sidebar-actions">
                <a href="#" className="sidebar-primary-btn">Apply Now</a>
                <a href="#" className="sidebar-secondary-btn">Download Brochure</a>
              </div>

              <div className="sidebar-contact-section">
                <h4 className="sidebar-contact-title">Contact</h4>
                <div className="contact-list">
                  <div className="contact-item">
                    <Globe size={16} className="text-accent" />
                    <a href="#" className="contact-link">www.college.edu.in</a>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} className="text-accent" />
                    <span>+91 20 1234 5678</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} className="text-accent" />
                    <span>admissions@college.edu.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
