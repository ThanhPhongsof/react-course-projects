import React from "react";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.grayScale};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.purpleLight};
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
  /* overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; */
`;

const PostCategory = ({ children, type = "primary", className = "" }) => {
  return (
    <PostCategoryStyles type={type} className={className}>
      {children}
    </PostCategoryStyles>
  );
};

export default PostCategory;
