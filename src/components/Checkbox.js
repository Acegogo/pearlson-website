import React from 'react';
import { motion } from 'framer-motion';

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  className = '',
  indeterminate = false,
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    onChange(e.target.checked);
  };

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <div className="relative">
          <input
            type="checkbox"
            className={`
              sr-only
              peer
            `}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            ref={(input) => {
              if (input) {
                input.indeterminate = indeterminate;
              }
            }}
          />
          <motion.div
            className={`
              w-5 h-5
              border rounded
              flex items-center justify-center
              transition-colors
              ${
                disabled
                  ? 'bg-gray-100 border-gray-300 cursor-not-allowed'
                  : checked || indeterminate
                  ? 'bg-pearlson-red border-pearlson-red'
                  : 'bg-white border-gray-300 hover:border-pearlson-red'
              }
              ${error ? 'border-red-500' : ''}
            `}
            whileTap={{ scale: 0.95 }}
          >
            {(checked || indeterminate) && (
              <motion.svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {indeterminate ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 12h14"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                )}
              </motion.svg>
            )}
          </motion.div>
        </div>
      </div>
      {label && (
        <label
          className={`
            ml-2 text-sm
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

export default Checkbox; 