import React from 'react';

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  rows = 4,
  helperText,
  maxLength,
}) => {
  const baseClasses = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 resize-none';

  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-pearlson-red focus:border-pearlson-red';

  const disabledClasses = disabled
    ? 'bg-gray-100 cursor-not-allowed'
    : 'bg-white';

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className={`
            ${baseClasses}
            ${stateClasses}
            ${disabledClasses}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : helperText ? `${name}-helper` : undefined}
        />
      </div>
      <div className="flex justify-between items-center">
        {error && (
          <p
            id={`${name}-error`}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${name}-helper`}
            className="text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
        {maxLength && (
          <p className="text-sm text-gray-500">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea; 