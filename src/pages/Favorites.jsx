import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useColleges } from '../hooks/useColleges';
import CollegeCard from '../components/college/CollegeCard';
import { Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { colleges } = useColleges();

  const favoriteColleges = colleges.filter(c => favorites.includes(c.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="text-red-500" fill="currentColor" size={32} />
        <h1 className="text-3xl font-bold text-[var(--text-h)]">My Favorites</h1>
      </div>

      {favoriteColleges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-[var(--social-bg)] rounded-full flex items-center justify-center text-[var(--text)] mb-6">
            <Heart size={40} />
          </div>
          <h2 className="text-xl font-bold mb-2">No favorites yet</h2>
          <p className="text-[var(--text)] mb-8">Explore colleges and click the heart icon to save them here.</p>
          <Link to="/colleges">
            <Button variant="primary">Explore Colleges</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
