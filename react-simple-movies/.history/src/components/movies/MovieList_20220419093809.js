import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import MovieCard from "./MovieCard";

// https://api.themoviedb.org/3/movie/now_playing?api_key=0d3b2005b0dcb775cf17c8a021f6d832
const MovieList = () => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
