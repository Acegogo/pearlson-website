import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = false,
  glow = false,
  onClick,
  padding = true,
  shadow = true,
  border = true,
}) => {
  const baseClasses = glow
    ? 'glow-card'
    : 'bg-white rounded-2xl transition-all duration-300 backdrop-blur-sm';

  const paddingClass = padding ? 'p-6' : '';
  const shadowClass = !glow && shadow ? 'shadow-lg' : '';
  const borderClass = !glow && border ? 'border border-orange/25' : '';

  const cardClasses = `
    ${baseClasses}
    ${paddingClass}
    ${shadowClass}
    ${borderClass}
    ${className}
  `;

  const hoverClasses = hover && !glow
    ? 'hover:shadow-glow-card-hover hover:scale-[1.02] cursor-pointer'
    : hover && glow
    ? 'cursor-pointer'
    : '';

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={`${cardClasses} ${hoverClasses}`}
      onClick={onClick}
      whileHover={hover && !glow ? { scale: 1.02 } : hover && glow ? { y: -4 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </Component>
  );
};

export default Card;
