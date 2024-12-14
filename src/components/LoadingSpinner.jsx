

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-opacity-75"></div>
        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;


