import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePage from "./pages/MoviePage";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <Fragment>
                <Banner></Banner>
                <HomePage></HomePage>
              </Fragment>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

//      <Header></Header>
// <Banner></Banner>
// <HomePage></HomePage>

export default App;
