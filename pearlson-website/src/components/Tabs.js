import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'default',
  fullWidth = false,
}) => {
  const variantClasses = {
    default: 'border-b border-gray-200',
    pills: 'space-x-2',
    underline: 'border-b border-gray-200',
  };

  const tabClasses = {
    default: {
      base: 'px-4 py-2 text-sm font-medium border-b-2 -mb-px',
      active: 'border-pearlson-red text-pearlson-red',
      inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    },
    pills: {
      base: 'px-4 py-2 text-sm font-medium rounded-full',
      active: 'bg-pearlson-red text-white',
      inactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
    },
    underline: {
      base: 'px-4 py-2 text-sm font-medium relative',
      active: 'text-pearlson-red',
      inactive: 'text-gray-500 hover:text-gray-700',
    },
  };

  return (
    <div className={className}>
      {/* Tab List */}
      <div
        className={`
          flex ${fullWidth ? 'w-full' : ''}
          ${variantClasses[variant]}
        `}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              ${tabClasses[variant].base}
              ${activeTab === tab.id ? tabClasses[variant].active : tabClasses[variant].inactive}
              ${fullWidth ? 'flex-1' : ''}
              focus:outline-none
            `}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.label}
            {variant === 'underline' && activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-pearlson-red"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs; 