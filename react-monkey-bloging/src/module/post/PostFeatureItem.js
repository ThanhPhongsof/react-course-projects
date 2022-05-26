import PostCategory, { PostCategorySkeleton } from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta, { PostMetaSkeleton } from "./PostMeta";
import PostTitle, { PostTitleSkelton } from "./PostTitle";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import { LoadingSkeleton } from "components/loading";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0.25;
  }
  &:hover .post-image {
    transform: scale(1.2);
  }
  &:hover:before {
    opacity: 0;
  }
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      transition: transform 0.2s ease-in-out;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;

const PostFeatureItem = ({ data }) => {
  if (!data || !data.id) return;
  const date = data?.createdAt
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;

  return (
    <PostFeatureItemStyles>
      <PostImage url={data.image} alt="pexels"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && (
            <PostCategory to={category.slug}>{category?.name}</PostCategory>
          )}
          <PostMeta
            to={user?.slug}
            date={formatDate}
            authorName={user?.fullname}
          ></PostMeta>
        </div>
        <PostTitle to={data.slug} size="big">
          {data.title}
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export const PostFeatureItemSkeleton = () => {
  return (
    <PostFeatureItemStyles className="h-full text-white rounded-lg select-none">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="16px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <div>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </div>
          <div>
            <PostMetaSkeleton></PostMetaSkeleton>
          </div>
        </div>
        <PostTitleSkelton size="big"></PostTitleSkelton>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
