import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Rating = ({
  value,
  onChange,
  max = 5,
  size = 'md',
  disabled = false,
  readOnly = false,
  allowHalf = false,
  showValue = false,
  className = '',
  character,
}) => {
  const [hoverValue, setHoverValue] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const handleMouseEnter = (index) => {
    if (disabled || readOnly) return;
    setIsHovering(true);
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    if (disabled || readOnly) return;
    setIsHovering(false);
    setHoverValue(null);
  };

  const handleClick = (index) => {
    if (disabled || readOnly) return;
    onChange(index);
  };

  const renderStar = (index) => {
    const currentValue = isHovering ? hoverValue : value;
    const isHalf = allowHalf && currentValue === index - 0.5;
    const isFilled = currentValue >= index;

    return (
      <motion.div
        key={index}
        className={`
          ${sizeClasses[size]}
          cursor-pointer
          ${disabled || readOnly ? 'cursor-default' : ''}
        `}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
        whileHover={!disabled && !readOnly ? { scale: 1.1 } : {}}
        whileTap={!disabled && !readOnly ? { scale: 0.9 } : {}}
      >
        {character ? (
          <span
            className={`
              ${sizeClasses[size]}
              flex items-center justify-center
              ${isFilled ? 'text-pearlson-red' : 'text-gray-300'}
            `}
          >
            {character}
          </span>
        ) : (
          <svg
            className={`
              ${sizeClasses[size]}
              ${isFilled ? 'text-pearlson-red' : 'text-gray-300'}
            `}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {isHalf ? (
              <defs>
                <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
            ) : null}
            <path
              fill={isHalf ? 'url(#half)' : 'currentColor'}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        )}
      </motion.div>
    );
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: max }, (_, i) => i + 1).map((index) => (
          <React.Fragment key={index}>
            {allowHalf && index > 1 && (
              <div
                className={`
                  ${sizeClasses[size]}
                  relative
                  ${disabled || readOnly ? 'cursor-default' : 'cursor-pointer'}
                `}
                onMouseEnter={() => handleMouseEnter(index - 0.5)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index - 0.5)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {character ? (
                    <span
                      className={`
                        ${sizeClasses[size]}
                        flex items-center justify-center
                        ${hoverValue >= index - 0.5 ? 'text-pearlson-red' : 'text-gray-300'}
                      `}
                    >
                      {character}
                    </span>
                  ) : (
                    <svg
                      className={`
                        ${sizeClasses[size]}
                        ${hoverValue >= index - 0.5 ? 'text-pearlson-red' : 'text-gray-300'}
                      `}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
              </div>
            )}
            {renderStar(index)}
          </React.Fragment>
        ))}
      </div>
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {isHovering ? hoverValue : value}
        </span>
      )}
    </div>
  );
};

export default Rating; 