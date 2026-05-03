import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useColleges } from '../hooks/useColleges';
import CollegeCard from '../components/college/CollegeCard';
import { Heart, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { colleges } = useColleges();
  const favoriteColleges = colleges.filter(c => favorites.includes(c.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="page-header-left mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="fav-header-icon">
            <Heart size={22} fill="currentColor" />
          </div>
          <div>
            <h1 className="page-hero-title" style={{ fontSize: '2.2rem', margin: 0 }}>My Favorites</h1>
            <p style={{ color: 'var(--text)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              {favoriteColleges.length > 0
                ? `${favoriteColleges.length} college${favoriteColleges.length !== 1 ? 's' : ''} saved`
                : 'Save colleges to compare them later'}
            </p>
          </div>
        </div>
      </header>

      {favoriteColleges.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {favoriteColleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              to="/colleges"
              className="explore-more-btn"
            >
              Explore More Colleges <ArrowRight size={18} />
            </Link>
          </div>
        </>
      ) : (
        <div className="fav-empty-state">
          <div className="fav-empty-icon">
            <Heart size={48} />
          </div>
          <h2 className="fav-empty-title">No favorites yet</h2>
          <p className="fav-empty-subtitle">
            Explore colleges and click the heart icon to save them here for easy comparison.
          </p>
          <Link to="/colleges" className="fav-explore-btn">
            <GraduationCap size={20} /> Explore Colleges
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
