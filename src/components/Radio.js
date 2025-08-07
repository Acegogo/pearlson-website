import React from 'react';
import { motion } from 'framer-motion';

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  error,
  className = '',
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    onChange(e.target.value);
  };

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <div className="relative">
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
          />
          <motion.div
            className={`
              w-5 h-5
              border rounded-full
              flex items-center justify-center
              transition-colors
              ${
                disabled
                  ? 'bg-gray-100 border-gray-300 cursor-not-allowed'
                  : checked
                  ? 'border-pearlson-red'
                  : 'bg-white border-gray-300 hover:border-pearlson-red'
              }
              ${error ? 'border-red-500' : ''}
            `}
            whileTap={{ scale: 0.95 }}
          >
            {checked && (
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-pearlson-red"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
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

const RadioGroup = ({
  name,
  value,
  onChange,
  options,
  disabled = false,
  error,
  className = '',
  orientation = 'vertical',
}) => {
  return (
    <div
      className={`
        ${orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-2'}
        ${className}
      `}
      role="radiogroup"
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
          disabled={disabled || option.disabled}
          error={error}
        />
      ))}
    </div>
  );
};

export { Radio, RadioGroup };
export default Radio; 