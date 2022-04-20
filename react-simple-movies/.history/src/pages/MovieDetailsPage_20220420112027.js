import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, apiUrl, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}?api_key=${apiKey}`;

  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title } = data;

  return (
    <Fragment>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div
        className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10"
        alt=""
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full rounded-lg"
          alt=""
        />
      </div>
      <h1 className="text-white text-bold">{title}</h1>
    </Fragment>
  );
};

export default MovieDetailsPage;
