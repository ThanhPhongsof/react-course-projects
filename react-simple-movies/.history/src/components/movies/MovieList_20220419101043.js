import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";

//
const MovieList = () => {
  const api =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=0d3b2005b0dcb775cf17c8a021f6d832";

  const [movie, setMovies] = useState([]);
  const { data, error } = useSWR(api, fetcher);

  useEffect(() => {
    setMovies(data.results);
    console.log(movie);
  }, []);
  console.log(data);
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
