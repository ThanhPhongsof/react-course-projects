import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
      <img
        src="https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="mb-5 text-xl font-bold">{item.title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm opacity-50">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
