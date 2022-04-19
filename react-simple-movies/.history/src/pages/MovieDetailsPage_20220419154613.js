import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0d3b2005b0dcb775cf17c8a021f6d832`;

  const [movies, setMovies] = useState({});
  const { data, error } = useSWR(api, fetcher);

  useEffect(() => {
    if (data) setMovies(data);
  }, [data]);
  //   console.log(data);
  console.log(movies);
  return <div></div>;
};

export default MovieDetailsPage;
