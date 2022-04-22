import React from "react";

const Button = ({
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  return (
    <button
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

//
//() => navigate(`/movie/${id}`)

export default Button;
