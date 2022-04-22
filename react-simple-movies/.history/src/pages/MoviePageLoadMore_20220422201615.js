import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "components/movies/MovieCard";
import { apiKey, apiUrl, fetcher, tmdbAPI } from "apiConfig/config";
import useDebounce from "hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
import Button from "components/button/Button";

const itemsPerPage = 20;

const MoviePageLoadMore = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState("");

  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 1000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const isLoading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieListByKeyword(filterDebounce, nextPage));
    } else setUrl(tmdbAPI.getMovieList("popular", nextPage));
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search ..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* {isLoading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )} */}
      {isLoading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!isLoading &&
          movies?.map((item) => (
            <NavLink key={item.id} to={`/movie/${item.id}`}>
              <MovieCard data={item}></MovieCard>
            </NavLink>
          ))}
      </div>
      <div className="mt-10 text-center">
        <Button bgColor="secondary">Load more</Button>
      </div>
    </div>
  );
};

export default MoviePageLoadMore;