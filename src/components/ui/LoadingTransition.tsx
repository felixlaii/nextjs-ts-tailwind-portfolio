import React from "react";

const LoadingTransition: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="border-t-8 border-gray-300 border-solid border-b-8 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default LoadingTransition;
