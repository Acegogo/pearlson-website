import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-pearlson-red text-white hover:bg-pearlson-red/90 focus:ring-pearlson-red',
    secondary: 'bg-pearlson-navy text-white hover:bg-pearlson-navy/90 focus:ring-pearlson-navy',
    outline: 'border-2 border-pearlson-red text-pearlson-red hover:bg-pearlson-red hover:text-white focus:ring-pearlson-red',
    ghost: 'text-pearlson-red hover:bg-pearlson-red/10 focus:ring-pearlson-red',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const disabledClasses = disabled || loading
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const iconClasses = {
    left: 'mr-2',
    right: 'ml-2',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${disabledClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <LoadingSpinner size="sm" color={variant === 'outline' ? 'pearlson-red' : 'white'} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className={iconClasses.left}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className={iconClasses.right}>{icon}</span>
          )}
        </>
      )}
    </motion.button>
  );
};

export default Button; 