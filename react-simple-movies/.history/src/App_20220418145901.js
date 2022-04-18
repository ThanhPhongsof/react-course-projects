import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white mb-10 py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[300px] bg-yellow-50 page-container">
        <div className="w-full h-full rounded-lg bg-white"></div>
      </section>
    </Fragment>
  );
}

export default App;
