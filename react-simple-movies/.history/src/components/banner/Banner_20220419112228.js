import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=0d3b2005b0dcb775cf17c8a021f6d832`;
  const { data, error } = useSWR(api, fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
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
  const { title, poster_path } = data;
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
        <button className="px-6 py-3 font-medium rounded-lg bg-primary texxt-white">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
