import Layout from "components/layout/Layout";
import PostImage from "module/post/PostImage";
import React from "react";
import styled from "styled-components";

const PostDetailsPageStyles = styled.div``;

const PostDetailsPage = () => {
  return (
    <PostDetailsPageStyles>
      <Layout>
        <div className="container">
          <div className="post-header">
            <PostImage
              url="https://images.unsplash.com/photo-1649837867356-6c7ef7057f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              className="post-feature"
            ></PostImage>
            <div className="post-info">
              <PostCategory className="mb-6">Kiến thức</PostCategory>
              <h1 className="post-heading">
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
              </h1>
              <PostMeta></PostMeta>
            </div>
          </div>
        </div>
      </Layout>
    </PostDetailsPageStyles>
  );
};

export default PostDetailsPage;
