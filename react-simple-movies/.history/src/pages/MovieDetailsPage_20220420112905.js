import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, apiUrl, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}?api_key=${apiKey}`;

  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

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
        className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10"
        alt=""
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full rounded-lg"
          alt=""
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 text-white border rounded-lg border-primary text-primary"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
