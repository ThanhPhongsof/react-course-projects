import React from "react";
import styled from "styled-components";

const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    &-category {
      display: inline-block;
      padding: 8px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      color: ${(props) => props.theme.grayScale};
      background-color: white;
      margin-bottom: 8px;
    }
    &-title {
      display: block;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 8px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
      color: ${(props) => props.theme.grayScale};
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

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
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
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
