import React from "react";

const LoadingTransition: React.FC = () => {
  return (
<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
  <div className="w-16 h-16 border-8 border-blue-500 border-solid rounded-full animate-spin"></div>
  <div className="w-16 h-16 border-8 border-blue-300 border-solid rounded-full absolute"></div>
</div>

  );
};

export default LoadingTransition;
