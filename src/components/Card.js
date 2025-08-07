import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = false,
  onClick,
  padding = true,
  shadow = true,
  border = true,
}) => {
  const baseClasses = 'bg-white rounded-lg transition-all duration-300';
  const paddingClass = padding ? 'p-6' : '';
  const shadowClass = shadow ? 'shadow-lg' : '';
  const borderClass = border ? 'border border-orange' : '';

  const cardClasses = `
    ${baseClasses}
    ${paddingClass}
    ${shadowClass}
    ${borderClass}
    ${className}
  `;

  const hoverClasses = hover
    ? 'hover:shadow-2xl hover:scale-105 cursor-pointer'
    : '';

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={`${cardClasses} ${hoverClasses}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </Component>
  );
};

export default Card; 