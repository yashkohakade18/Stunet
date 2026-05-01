import React from 'react';

const Card = ({ children, className = '', hoverable = true, glass = false, ...props }) => {
  const classes = [
    'feature-card',
    hoverable ? 'card-hoverable' : '',
    glass ? 'card-glass' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
