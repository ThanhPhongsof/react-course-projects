import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import "swiper/css";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
