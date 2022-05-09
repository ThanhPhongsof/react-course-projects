import React from "react";
import styled, { css } from "styled-components";

const ImageUploadStyles = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(243 244 246);
  border-width: 1px;
  border-style: dashed;
  width: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  .image {
    &-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      pointer-events: none;

      img {
        max-width: 80px;
        margin-bottom: 5px;
      }
    }
    &-choose {
      font-weight: 600;
    }
    &-overlay {
      position: absolute;
      ${(props) =>
        props.progess > -1 &&
        css`
          width: 0%;
          /* width: "${Math.cell(props.progress)}%"; */
        `};
      height: 1px;
      background-color: rgb(74 222 128);
      left: 0;
      bottom: 0;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }
`;

const ImageUpload = ({ name, className, progess = 0, ...rest }) => {
  return (
    <ImageUploadStyles className={className}>
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
      <div className="image-display">
        <img src="/img-upload.png" alt="upload-img" />
        <p className="image-choose">Choose photo</p>
      </div>
      <div className="image-overlay image-upload-progress"></div>
    </ImageUploadStyles>
  );
};

export default ImageUpload;
