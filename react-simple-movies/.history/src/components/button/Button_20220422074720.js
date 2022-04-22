import React from "react";

const Button = () => {
  return (
    <button
      className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
      onClick={() => navigate(`/movie/${id}`)}
    >
      Watch now
    </button>
  );
};

export default Button;
