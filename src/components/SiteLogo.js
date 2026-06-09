import React from 'react';

const SiteLogo = ({ className = 'h-10 md:h-12' }) => (
  <img
    src="/Images/PLS_logo.png"
    alt="Pearlson Languages and Solutions"
    className={`${className} w-auto max-w-[180px] object-contain bg-white rounded-xl px-2 py-1 shadow-sm`}
  />
);

export default SiteLogo;
