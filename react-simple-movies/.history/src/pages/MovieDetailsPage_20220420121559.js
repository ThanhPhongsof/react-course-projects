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
    <div className="py-10">
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
      <p className="text-center  leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}/credits?api_key=${apiKey}`;
  const { data, error } = useSWR(api, fetcher);

  const { cast } = data;
  if (!data) return null;
  return (
    <Fragment>
      <h2 className="mb-10 text-2xl text-center ">Casts</h2>;
      <div className="grid grid-cols-4 gap-5">
        <div className="card-items">
          <img src="" alt="" className="w-full h-[350px]" />
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
