import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
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
      <h1 className="mb-10 text-4xl font-bold text-center">{title}</h1>
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
      {/* <MovieCredits></MovieCredits> */}
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}/credits?api_key=${apiKey}`;
  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <Fragment>
      <h2 className="mb-10 text-3xl text-center ">Casts</h2>;
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div key={item.key} className="card-items">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const MovieVideos = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}/videos?api_key=${apiKey}`;
  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="inline-block p-3 mb-5 text-xl font-medium text-white rounded-md bg-secondary">
              {item.name}
            </h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="864"
                height="486"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-fill w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieSimilar = () => {
  const { movieId } = useParams();
  const api = `${apiUrl}/${movieId}/similar?api_key=${apiKey}`;
  const { data, error } = useSWR(api, fetcher);
  if (!data) return null;
  console.log(data);
  const { results } = data;
  if (!results || results.length <= 0) return null;
  // console.log(results);
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
      <div className="movie-list">
        {/* <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard data={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
