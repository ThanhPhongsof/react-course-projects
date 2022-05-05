import React from "react";
import styled from "styled-components";

const PostFeatureItemStyles = styled.div``;

const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <img
        src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="pexels"
        className="post-image"
      />
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <span className="post-category">Kiến thức</span>
          <div className="post-info">
            <span className="post-time">Mar 23</span>
            <span className="post-dot"></span>
            <span className="post-author">Andiez Le</span>
          </div>
        </div>
        <h3 className="post-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
