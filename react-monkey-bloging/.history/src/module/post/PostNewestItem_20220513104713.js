import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ddd;
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
      border-radius: 12px;
    }
    &-content {
      flex: 1;
    }
    &-category {
      margin-bottom: 8px;
    }
    &-title {
      margin-bottom: 8px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
    .post {
      &-image {
        width: 140px;
        height: 100px;
      }
    }
  }
`;

const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      <PostImage
        className="post-image"
        url="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="pexels"
        to="/"
      ></PostImage>
      <div className="post-content">
        <PostCategory type="secondary">Knowledge</PostCategory>
        <PostTitle className="post-title">
          The complete guide to learn new languages for beginners
        </PostTitle>
        <PostMeta></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
