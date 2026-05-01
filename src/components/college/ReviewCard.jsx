import React from 'react';
import Card from '../ui/Card';
import { Star, User } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <Card className="p-6" hoverable={false}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-bg rounded-full flex items-center justify-center text-accent">
            <User size={20} />
          </div>
          <div>
            <h4 className="font-bold text-var(--text-h) text-sm">{review.user}</h4>
            <p className="text-xs text-var(--text)">{review.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < review.rating ? 'currentColor' : 'none'} 
              className={i < review.rating ? '' : 'text-var(--border)'}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-var(--text) leading-relaxed italic">
        "{review.comment}"
      </p>
    </Card>
  );
};

export default ReviewCard;
