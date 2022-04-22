import React from "react";

const Button = ({
  onClick,
  className = "",
  children,
  full = false,
  type = "button",
  bgColor = "primary",
  disabled = false,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      bgClassName = "bg-primary";
      break;
  }
  return (
    <button
      className={` px-6 py-3 mt-auto capitalize rounded-lg ${
        full ? "w-full" : ""
      } ${bgClassName} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

//
//() => navigate(`/movie/${id}`)

export default Button;
