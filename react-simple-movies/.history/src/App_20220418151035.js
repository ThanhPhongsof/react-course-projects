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
            src="https://i.pinimg.com/originals/46/d1/f9/46d1f9015312e8e7670947d44193b1a3.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
