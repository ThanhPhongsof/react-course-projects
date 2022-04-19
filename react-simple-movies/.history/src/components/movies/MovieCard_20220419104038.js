import React from "react";

const MovieCard = ({ data }) => {
  const { title, vote_average, release_date } = item;
  console.log(data);
  return (
    <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="mb-5 text-xl font-bold">{data.title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm opacity-50">
        <span>{new Date(data.release_date).getFullYear()}</span>
        <span>{data.vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
