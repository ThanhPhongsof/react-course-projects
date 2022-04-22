import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

// w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary
//() => navigate(`/movie/${id}`)

export default Button;
