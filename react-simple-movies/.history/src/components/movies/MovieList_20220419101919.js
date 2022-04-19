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

  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(api, fetcher);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.map((item, index) => (
          <SwiperSlide>
            <MovieCard key={item.id} data={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
