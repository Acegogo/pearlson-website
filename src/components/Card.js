import React from 'react';

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
    : 'bg-white rounded-2xl transition-shadow duration-200';

  const paddingClass = padding ? 'p-6' : '';
  const shadowClass = !glow && shadow ? 'shadow-md' : '';
  const borderClass = !glow && border ? 'border border-orange/20' : '';
  const hoverClasses = hover ? 'hover:shadow-lg cursor-pointer' : '';

  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      className={`${baseClasses} ${paddingClass} ${shadowClass} ${borderClass} ${hoverClasses} ${className}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Tag>
  );
};

export default Card;
