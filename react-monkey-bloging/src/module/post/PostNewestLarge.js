import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 20px;
      height: 433px;
      border-radius: 16px;
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
      <PostImage
        className="post-image"
        url={data.image}
        alt="pexels"
        to={data.slug}
      ></PostImage>
      <PostCategory to={category?.slug}>{category?.name}</PostCategory>
      <PostTitle to={data.slug} size="big">
        {data.title}
      </PostTitle>
      <PostMeta
        to={`/${user?.username}`}
        date={formatDate}
        authorName={user?.fullname}
      ></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
