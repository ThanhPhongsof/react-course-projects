import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
}

//      <Header></Header>
// <Banner></Banner>
// <HomePage></HomePage>

export default App;
