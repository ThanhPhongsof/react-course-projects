import React, { Fragment } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const ImageUploadStyles = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(243 244 246);
  border-width: 1px;
  border-style: dashed;
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  &:hover .image-icon-delete {
    opacity: 1;
    visibility: visible;
  }
  .image {
    &-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      pointer-events: none;
    }
    &-show {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-icon-delete {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 10;
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      cursor: pointer;
      background-color: rgb(255 255 255 / 1);
      color: rgb(239 68 68);
      opacity: 0;
      visibility: hidden;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    &-loading {
      width: 64px;
      height: 64px;
      border-width: 8px;
      border-color: rgb(34, 197, 94);
      border-top-color: transparent;
      position: absolute;
      z-index: 10;
      border-radius: 9999px;
      animation: spin 1s linear infinite;
    }
    &-none {
      max-width: 80px;
      margin-bottom: 5px;
    }
    &-choose {
      font-weight: 600;
    }
    &-overlay {
      position: absolute;
      height: 2px;
      background-color: rgb(74, 222, 128);
      left: 0;
      bottom: 0;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ImageUpload = ({
  name,
  className,
  progress = 0,
  image,
  handleDeleteImage = () => {},
  ...rest
}) => {
  return (
    <ImageUploadStyles className={className}>
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
      {progress !== 0 && !image && <div className="image-loading"></div>}
      {image ? (
        <Fragment>
          <img src={image} className="image-show" alt="" />
          <button
            type="button"
            className="image-icon-delete"
            onClick={handleDeleteImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </Fragment>
      ) : (
        <div className="image-display">
          <img src="/img-upload.png" alt="upload-img" className="image-none" />
          <p className="image-choose">Choose photo</p>
        </div>
      )}
      {!image && (
        <div
          className="image-overlay image-upload-progress"
          style={{ width: `${Math.ceil(progress)}%` }}
        ></div>
      )}
    </ImageUploadStyles>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  progress: PropTypes.number,
  image: PropTypes.string,
};

export default ImageUpload;
