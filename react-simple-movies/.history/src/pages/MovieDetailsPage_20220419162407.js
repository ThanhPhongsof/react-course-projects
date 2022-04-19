import React, { Fragment, useEffect, useState } from "react";
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
  return (
    <Fragment>
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
