import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { apiKey, apiUrl, fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState("");

  const api = `${apiUrl}/popular?api_key=${apiKey}&page=${nextPage}`;
  const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const [url, setUrl] = useState(api);
  const filterDebounce = useDebounce(filter, 1000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(`${apiSearchMovie}&query=${filterDebounce}&page=${nextPage}`);
    } else setUrl(api);
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];
  // const { page, total_pages } = data;
  // console.log({ page, total_pages });

  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
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
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies?.map((item) => (
            <NavLink key={item.id} to={`/movie/${item.id}`}>
              <MovieCard data={item}></MovieCard>
            </NavLink>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

{
  /* <div className="flex items-center justify-center hidden mt-10 gap-x-5">
<span className="cursor-pointer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    onClick={() =>
      setNextPage((nextPage) =>
        nextPage == 1 ? nextPage : nextPage - 1
      )
    }
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</span>
{new Array(pageCount).fill(0).map((item, index) => (
  <span
    className="inline-block px-4 py-2 leading-none bg-white rounded cursor-pointer text-slate-900"
    onClick={() => setNextPage((nextPage) => nextPage + 1)}
  >
    {index + 1}
  </span>
))}
<span className="cursor-pointer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    onClick={() =>
      setNextPage((nextPage) =>
        nextPage > pageCount ? nextPage : nextPage + 1
      )
    }
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</span>
</div> */
}

export default MoviePage;
