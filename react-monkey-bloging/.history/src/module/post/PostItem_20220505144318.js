import React from "react";
import styled from "styled-components";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    &-category {
      display: inline-block;
      padding: 8px;
      border-radius: 8px;
      color: ${(props) => props.theme.grayScale};
      background-color: ${(props) => props.theme.purpleLight};
      font-size: 14px;
      font-weight: 600;
    }
    &-title {
    }
    &-info {
    }
    &-title {
    }
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <div className="post-image">
        <img
          src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="post-category">Kiến thức</div>
      <h3 className="post-title">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </h3>
      <div className="post-info">
        <span className="post-time">Mar 23</span>
        <span className="post-dot"></span>
        <span className="post-author">Andiez Le</span>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
