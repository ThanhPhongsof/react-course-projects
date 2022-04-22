import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Button from "../button/Button";

const Banner = () => {
  const { data, error } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[800px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <BannerItem data={item}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ data }) => {
  const { id, title, poster_path } = data;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Drama
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} className="w-auto">
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
