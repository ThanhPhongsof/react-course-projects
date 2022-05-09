import React from "react";
import styled from "styled-components";

const ImageUploadStyles = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107 114 128);
  border-width: 1px;
  border-style: dashed;
  width: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  image {
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
  }
`;

const ImageUpload = ({ name, className, ...rest }) => {
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
      </div>
    </ImageUploadStyles>
  );
};

export default ImageUpload;
