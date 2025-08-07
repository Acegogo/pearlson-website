import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className = '',
  searchable = false,
  multiple = false,
  clearable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef(null);

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    if (multiple) {
      const newValue = value.includes(option.value)
        ? value.filter((v) => v !== option.value)
        : [...value, option.value];
      onChange(newValue);
    } else {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(multiple ? [] : null);
  };

  const selectedOptions = multiple
    ? options.filter((option) => value.includes(option.value))
    : options.find((option) => option.value === value);

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div
        className={`
          relative w-full
          ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div
          className={`
            min-h-[38px] w-full px-3 py-2
            bg-white border rounded-md shadow-sm
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${disabled ? 'bg-gray-50' : 'hover:border-gray-400'}
            focus:outline-none focus:ring-1 focus:ring-pearlson-red focus:border-pearlson-red
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {multiple ? (
                selectedOptions.length > 0 ? (
                  selectedOptions.map((option) => (
                    <span
                      key={option.value}
                      className="inline-flex items-center px-2 py-0.5 rounded text-sm bg-pearlson-red bg-opacity-10 text-pearlson-red"
                    >
                      {option.label}
                      <button
                        type="button"
                        className="ml-1 inline-flex text-pearlson-red hover:text-pearlson-red-dark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(option);
                        }}
                      >
                        <span className="sr-only">Remove</span>
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">{placeholder}</span>
                )
              ) : (
                <span className={selectedOptions ? 'text-gray-900' : 'text-gray-500'}>
                  {selectedOptions ? selectedOptions.label : placeholder}
                </span>
              )}
            </div>

            <div className="flex items-center">
              {clearable && value && (
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 mr-1"
                  onClick={handleClear}
                >
                  <span className="sr-only">Clear</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              <svg
                className={`h-5 w-5 text-gray-400 transform transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg"
            >
              {searchable && (
                <div className="p-2">
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pearlson-red focus:border-pearlson-red"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              <ul
                className="max-h-60 overflow-auto py-1 text-sm"
                role="listbox"
              >
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className={`
                      px-3 py-2 cursor-pointer
                      ${
                        multiple
                          ? value.includes(option.value)
                          : value === option.value
                          ? 'bg-pearlson-red bg-opacity-10 text-pearlson-red'
                          : 'text-gray-900 hover:bg-gray-100'
                      }
                    `}
                    onClick={() => handleSelect(option)}
                    role="option"
                    aria-selected={
                      multiple
                        ? value.includes(option.value)
                        : value === option.value
                    }
                  >
                    <div className="flex items-center">
                      {multiple && (
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4 text-pearlson-red focus:ring-pearlson-red border-gray-300 rounded"
                          checked={value.includes(option.value)}
                          onChange={() => {}}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                      {option.label}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Select; 