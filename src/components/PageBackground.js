import React from 'react';

const PageBackground = ({ image, children, className = '', overlay = 'cream' }) => {
  const overlayClass =
    overlay === 'dark'
      ? 'bg-black/50'
      : overlay === 'light'
      ? 'bg-cream/80'
      : 'bg-cream/85';

  return (
    <div className={`relative min-h-screen w-full ${className}`}>
      {image && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
      )}
      {image && (
        <div className={`absolute inset-0 z-0 ${overlayClass}`} aria-hidden="true" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageBackground;
