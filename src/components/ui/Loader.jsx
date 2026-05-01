import React from 'react';

const Loader = ({ size = 'md', color = 'var(--accent)' }) => {
  const sizes = {
    sm: '24px',
    md: '48px',
    lg: '64px'
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className="flex items-center justify-center p-8">
      <div 
        className="loader-spinner"
        style={{ 
          width: currentSize, 
          height: currentSize,
          borderColor: `${color}20`,
          borderTopColor: color
        }}
      />
    </div>
  );
};

export const Skeleton = ({ width = '100%', height = '20px', borderRadius = '4px', className = '' }) => {
  return (
    <div 
      className={`skeleton-loader ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
};

export default Loader;
