import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { apiKey, apiUrl, fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const api = `${apiUrl}/popular?api_key=${apiKey}`;
  const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(api);
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (filterDebounce) {
      // const newUrl = `{${apiSearchMovie}&query=${filterDebounce}`;
      console.log(`${apiSearchMovie}&query=${filterDebounce}`);
      setUrl(`${apiSearchMovie}&query=${filterDebounce}`);
    } else setUrl(api);
  }, [filterDebounce]);

  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies?.map((item) => (
          <NavLink key={item.id} to={`/movie/${item.id}`}>
            <MovieCard data={item}></MovieCard>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
