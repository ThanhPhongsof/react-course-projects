import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MoviePageLoadMore = lazy(() => import("./pages/MoviePageLoadMore"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
              path="/moviesloadmore"
              element={<MoviePageLoadMore></MoviePageLoadMore>}
            ></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route exact path="*" component={PageNotFound}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
