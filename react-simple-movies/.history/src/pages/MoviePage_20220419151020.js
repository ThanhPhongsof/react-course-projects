import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import MovieList from "../components/movies/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=0d3b2005b0dcb775cf17c8a021f6d832`;

  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(api, fetcher);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="py-10">
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            placeholder="Type here to search ..."
          />
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies?.map((item) => (
          <MovieCard key={item.id} data={item}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
