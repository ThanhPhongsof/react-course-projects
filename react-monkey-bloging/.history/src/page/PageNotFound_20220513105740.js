import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundStyles = styled.div``;

const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <img src="/404.png" alt="" className="image" />
        <h1>404 - Looks like you're lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <NavLink to="/" className={"black"}>
          Back to home
        </NavLink>
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
