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
    <div className="px-6 py-10 gap-x-5">
      {movies?.map((item, index) => (
        <MovieCard key={item.id} data={item}></MovieCard>
      ))}
    </div>
  );
};

export default MoviePage;
