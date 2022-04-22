import React from "react";

const Button = ({
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "second":
      bgClassName = "bg-secondary";
      break;
    default:
      bgClassName = "bg-primary";
      break;
  }
  return (
    <button
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg ${bgClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

//
//() => navigate(`/movie/${id}`)

export default Button;
