import React from 'react';
import { motion } from 'framer-motion';

const Progress = ({
  value,
  max = 100,
  type = 'bar',
  size = 'md',
  color = 'pearlson-red',
  showLabel = false,
  labelPosition = 'inside',
  className = '',
  animated = true,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    sm: {
      bar: 'h-1',
      circle: 'w-16 h-16',
      text: 'text-xs',
    },
    md: {
      bar: 'h-2',
      circle: 'w-24 h-24',
      text: 'text-sm',
    },
    lg: {
      bar: 'h-4',
      circle: 'w-32 h-32',
      text: 'text-base',
    },
  };

  const colorClasses = {
    'pearlson-red': 'bg-pearlson-red',
    'pearlson-blue': 'bg-pearlson-blue',
    'pearlson-green': 'bg-pearlson-green',
    'pearlson-yellow': 'bg-pearlson-yellow',
    'pearlson-purple': 'bg-pearlson-purple',
  };

  if (type === 'bar') {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={animated ? { width: 0 } : false}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`${sizeClasses[size].bar} ${colorClasses[color]} rounded-full`}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          />
        </div>
        {showLabel && labelPosition === 'outside' && (
          <div className={`mt-1 text-right ${sizeClasses[size].text} text-gray-600`}>
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }

  if (type === 'circle') {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`relative inline-block ${className}`}>
        <svg
          className={`${sizeClasses[size].circle} -rotate-90`}
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <motion.circle
            className={`${colorClasses[color]}`}
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            initial={animated ? { strokeDashoffset: circumference } : false}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        {showLabel && (
          <div
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${sizeClasses[size].text} font-medium text-gray-700
            `}
          >
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Progress; 