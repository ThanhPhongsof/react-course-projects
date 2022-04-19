import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

//      <Header></Header>
// <Banner></Banner>
// <HomePage></HomePage>

export default App;
