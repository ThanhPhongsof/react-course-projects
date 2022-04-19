import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, apiUrl, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const api = `${apiUrl}/${movieId}?api_key=${apiKey}`;

  const [movie, setMovie] = useState({});
  const { data, error } = useSWR(api, fetcher);

  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);
  console.log(movie);
  return <div>detail</div>;
};

export default MovieDetailsPage;
