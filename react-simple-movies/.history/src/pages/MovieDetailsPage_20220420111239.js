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
    if (!data) setMovie({});
    setMovie(data);
  }, [data]);
  const { backdrop_path, poster_path } = movie;
  return (
    <Fragment>
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px]" alt="">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
