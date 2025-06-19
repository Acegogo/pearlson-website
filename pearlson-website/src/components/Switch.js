import React from 'react';
import { motion } from 'framer-motion';

const Switch = ({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  className = '',
  size = 'md',
  loading = false,
}) => {
  const handleChange = (e) => {
    if (disabled || loading) return;
    onChange(e.target.checked);
  };

  const sizeClasses = {
    sm: {
      switch: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4',
    },
    md: {
      switch: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5',
    },
    lg: {
      switch: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7',
    },
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            onChange={handleChange}
            disabled={disabled || loading}
          />
          <motion.div
            className={`
              ${sizeClasses[size].switch}
              rounded-full
              transition-colors
              ${
                disabled
                  ? 'bg-gray-200 cursor-not-allowed'
                  : loading
                  ? 'bg-gray-300 cursor-wait'
                  : checked
                  ? 'bg-pearlson-red'
                  : 'bg-gray-300'
              }
              ${error ? 'ring-2 ring-red-500 ring-opacity-50' : ''}
            `}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`
                ${sizeClasses[size].thumb}
                absolute left-0.5 top-0.5
                rounded-full
                bg-white
                shadow-sm
                transition-transform
                ${checked ? sizeClasses[size].translate : ''}
              `}
              initial={false}
              animate={{
                x: checked ? sizeClasses[size].translate : '0',
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-pearlson-red border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      {label && (
        <label
          className={`
            ml-3 text-sm
            ${disabled ? 'text-gray-400' : 'text-gray-700'}
            ${error ? 'text-red-500' : ''}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch; 