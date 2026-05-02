import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  const variants = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    outline: 'outline-btn',
    ghost: 'ghost-btn',
    danger: 'danger-btn'
  };

  const baseClass = variants[variant] || variants.primary;
  const sizeClass = `btn-${size}`;
  const loadingClass = isLoading ? 'btn-loading' : '';
  
  return (
    <button 
      className={`${baseClass} ${sizeClass} ${loadingClass} ${className}`} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="btn-spinner"></span>
      ) : children}
    </button>
  );
};

export default Button;
