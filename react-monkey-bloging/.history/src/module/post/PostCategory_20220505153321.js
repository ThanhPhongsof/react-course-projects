import React from "react";
import styled from "styled-components";

const PostCategoryStyles = styled.span`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${(props) => props.theme.grayScale};
  background-color: ${(props) => props.theme.purpleLight};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  /* overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; */
`;

const PostCategory = ({ children, type = "primary" }) => {
  return <PostCategoryStyles>{children}</PostCategoryStyles>;
};

export default PostCategory;
