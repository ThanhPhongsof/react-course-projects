import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movies/MovieList";
import "swiper/css";
import Header from "./components/layout/Header";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
