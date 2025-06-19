import React from 'react';
import { motion } from 'framer-motion';

const Table = ({
  columns,
  data,
  className = '',
  striped = true,
  hoverable = true,
  sortable = false,
  onSort,
  currentSort = { key: null, direction: 'asc' },
  loading = false,
  emptyMessage = 'No data available',
}) => {
  const handleSort = (key) => {
    if (!sortable || !onSort) return;

    const direction =
      currentSort.key === key && currentSort.direction === 'asc'
        ? 'desc'
        : 'asc';

    onSort(key, direction);
  };

  const getSortIcon = (key) => {
    if (!sortable || currentSort.key !== key) {
      return (
        <svg
          className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      );
    }

    return (
      <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={
            currentSort.direction === 'asc'
              ? 'M5 15l7-7 7 7'
              : 'M19 9l-7 7-7-7'
          }
        />
      </svg>
    );
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`
                  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                  ${sortable ? 'cursor-pointer group' : ''}
                `}
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center">
                  {column.label}
                  {getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pearlson-red"></div>
                  <span className="ml-2">Loading...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
                className={`
                  ${striped && rowIndex % 2 === 0 ? 'bg-gray-50' : ''}
                  ${hoverable ? 'hover:bg-gray-100' : ''}
                `}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table; 