import React from "react";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  display: block;
  color: white;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
`;

const PostTitle = ({ children, className = "", size = "normal" }) => {
  console.log(size);
  return (
    <PostTitleStyles size={size} className={className}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
