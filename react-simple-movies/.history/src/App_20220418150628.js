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
            src="https://cdn.dribbble.com/users/1932235/screenshots/11960179/media/01d29ce9a6ab94a680cecaf798554fd5.png?compress=1&resize=1200x900&vertical=top"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
