import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import { fetcher, tmdbAPI } from "apiConfig/config";
import PropTypes from "prop-types";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard data={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
