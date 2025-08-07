import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  disabled = false,
  error,
  className = '',
  showValue = true,
  showTicks = false,
  showTooltip = true,
  marks,
  formatValue,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(0);
  const sliderRef = useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  useEffect(() => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      setTooltipPosition((rect.width * percentage) / 100);
    }
  }, [percentage, isDragging]);

  const handleChange = (e) => {
    if (disabled) return;
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const renderMarks = () => {
    if (!marks && !showTicks) return null;

    const items = marks || Array.from({ length: (max - min) / step + 1 }, (_, i) => ({
      value: min + i * step,
      label: min + i * step,
    }));

    return (
      <div className="absolute w-full h-1 top-1/2 -translate-y-1/2">
        {items.map((mark) => {
          const markPercentage = ((mark.value - min) / (max - min)) * 100;
          return (
            <div
              key={mark.value}
              className="absolute w-1 h-1 bg-gray-300 rounded-full"
              style={{ left: `${markPercentage}%` }}
            >
              {mark.label && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                  {mark.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={sliderRef}
        className="relative h-8"
        onMouseDown={handleMouseDown}
      >
        {/* Track */}
        <div
          className={`
            absolute w-full h-1 top-1/2 -translate-y-1/2
            rounded-full
            ${disabled ? 'bg-gray-200' : 'bg-gray-300'}
          `}
        >
          {/* Filled track */}
          <motion.div
            className={`
              absolute h-full rounded-full
              ${disabled ? 'bg-gray-400' : 'bg-pearlson-red'}
            `}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Marks */}
        {renderMarks()}

        {/* Thumb */}
        <motion.div
          className={`
            absolute w-4 h-4
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            ${disabled ? 'bg-gray-400' : 'bg-pearlson-red'}
            ${error ? 'ring-2 ring-red-500 ring-opacity-50' : ''}
            cursor-pointer
          `}
          style={{ left: `${percentage}%`, top: '50%' }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          {showTooltip && (isDragging || showValue) && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {formatValue ? formatValue(value) : value}
            </motion.div>
          )}
        </motion.div>

        {/* Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`
            absolute w-full h-full
            opacity-0
            cursor-pointer
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
        />
      </div>

      {/* Value display */}
      {showValue && !showTooltip && (
        <div className="mt-2 text-sm text-gray-600">
          {formatValue ? formatValue(value) : value}
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Slider; 