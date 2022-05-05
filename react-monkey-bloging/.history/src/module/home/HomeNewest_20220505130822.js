import Heading from "components/layout/Heading";
import React from "react";
import styled from "styled-components";

const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 64px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }

  .post {
    &-image {
      display: block;
      margin-bottom: 16px;
      height: 433px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    &-category {
      display: inline-block;
      padding: 8px 10px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      color: ${(props) => props.theme.grayScale};
      background-color: ${(props) => props.theme.purpleLight};
      margin-bottom: 16px;
    }
    &-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 1.5;
      color: ${(props) => props.theme.grayScale};
      margin-bottom: 12px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="layout">
          <div className="post-newes-large">
            <div className="post-image">
              <img
                src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="post-category">Kiến thức</div>
            <h3 className="post-title">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </h3>
            <div className="post-info">
              <span className="post-item">Mar 23</span>
              <span className="post-dot"></span>
              <span className="post-author">Andiez Le</span>
            </div>
          </div>
          <div className="sidebar"></div>
        </div>
        <div className="grid-layout grid-layout--primary"></div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
