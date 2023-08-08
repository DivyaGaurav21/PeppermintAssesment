import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-teal-600 text-white hover:text-teal-600 hover:border-teal-600 hover:bg-white py-2 px-4 rounded-md border border-teal-600 transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;
