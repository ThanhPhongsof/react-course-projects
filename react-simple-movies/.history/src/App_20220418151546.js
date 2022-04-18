import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white mb-10 py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolete left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-3">Avengers: Endgame</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
