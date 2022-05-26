import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestLargeStyles = styled.div`
  .post {
    &-newest-large {
      position: relative;
      transition: transform 0.2s ease-in-out;
      overflow: hidden;
      z-index: 2;
      &:before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.25;
      }
      &:hover {
        border-radius: 16px;
      }
      &:hover .post-image {
        transform: scale(1.2);
      }
      &:hover:before {
        opacity: 0;
      }
    }

    &-image {
      display: block;
      margin-bottom: 20px;
      height: 433px;
      border-radius: 16px;
      transition: transform 0.2s ease-in-out;
      object-fit: cover;
    }
    &-category {
      margin-bottom: 10px;
    }
    &-title {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 1023.98px) {
      &-image {
        height: 250px;
      }
    }
  }
`;

const PostNewestLarge = ({ data }) => {
  const date = data?.createdAt
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;
  if (!data) return null;
  return (
    <PostNewestLargeStyles>
      <div className="post-newest-large">
        <PostImage url={data.image} alt="pexels" to={data.slug}></PostImage>
      </div>
      <PostCategory to={category?.slug}>{category?.name}</PostCategory>
      <PostTitle to={data.slug} size="big">
        {data.title}
      </PostTitle>
      <PostMeta
        to={user?.slug}
        date={formatDate}
        authorName={user?.fullname}
      ></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
