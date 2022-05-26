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
    &-newest {
      transition: transform 0.2s ease-in-out;
      overflow: hidden;
      z-index: 2;
      position: relative;
    }
    &-newest:before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.25;
    }
    &-newest:hover {
      border-radius: 16px;
    }
    &-newest:hover .post-image {
      transform: scale(1.2);
    }
    &-newest:hover:before {
      opacity: 0;
    }
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 16px;
      transition: transform 0.2s ease-in-out;
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

const PostNewestItem = ({ data }) => {
  const date = data?.createdAt
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;
  if (!data) return null;
  return (
    <PostNewestItemStyles>
      <div className="post-newest">
        <PostImage
          className="post-image"
          url={data.image}
          alt="pexels"
          to={data.slug}
        ></PostImage>
      </div>
      <div className="post-content">
        <PostCategory to={category?.slug}>{category?.name}</PostCategory>
        <PostTitle to={data.slug} size="big">
          {data.title}
        </PostTitle>
        <PostMeta
          to={user?.slug}
          date={formatDate}
          authorName={user?.fullname}
        ></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
