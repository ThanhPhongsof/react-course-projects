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
      <div className="grid grid-cols-4 gap-10">
        {movies?.map((item) => (
          <MovieCard key={item.id} data={item}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
