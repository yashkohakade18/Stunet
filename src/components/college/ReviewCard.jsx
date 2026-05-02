import React from 'react';
import Card, { CardContent } from '../ui/Card';
import { Star, User, ThumbsUp } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <Card className="review-card" hoverable={false}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="review-avatar">
              <User size={18} />
            </div>
            <div>
              <h4 className="review-user">{review.user}</h4>
              <p className="review-date">{review.date}</p>
            </div>
          </div>
          <div className="review-rating">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < review.rating ? 'currentColor' : 'none'} 
                className={i < review.rating ? 'star-active' : 'star-inactive'}
              />
            ))}
          </div>
        </div>
        <p className="review-comment">
          {review.comment}
        </p>
        <div className="review-footer">
          <button className="like-btn">
            <ThumbsUp size={14} />
            <span>Helpful</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
