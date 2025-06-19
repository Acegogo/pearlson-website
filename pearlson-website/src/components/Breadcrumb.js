import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items, className = '', separator = '/' }) => {
  return (
    <nav
      className={`flex ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">{separator}</span>
              )}
              {isLast ? (
                <span
                  className="text-gray-500"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-pearlson-red hover:text-pearlson-red-dark transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 