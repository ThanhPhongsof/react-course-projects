import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full text-white left-5 bottom-5">
            <h2 className="mb-5 text-3xl font-bold">Avengers: Endgame</h2>
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
      </section>
      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <div className="grid grid-cols-4 gap-10 movie-list ">
          <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
            <img
              src="https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-5 text-xl font-bold">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
