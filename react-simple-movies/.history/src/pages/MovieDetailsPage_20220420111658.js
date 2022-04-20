import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, apiUrl, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}?api_key=${apiKey}`;

  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path } = data;

  return (
    <Fragment>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto" alt="">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full rounded-lg"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
