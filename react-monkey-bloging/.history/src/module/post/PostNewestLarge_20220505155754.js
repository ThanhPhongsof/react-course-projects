import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";

const PostNewestLargeStyles = styled.div`
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
      margin-bottom: 10px;
    }
    &-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 1.5;
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

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <div className="post-image">
        <img
          src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <PostCategory>Kiến thức</PostCategory>
      <h3 className="post-title">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </h3>
      <div className="post-info">
        <span className="post-item">Mar 23</span>
        <span className="post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
