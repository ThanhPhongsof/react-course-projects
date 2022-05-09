import React from "react";
import styled from "styled-components";

const ImageUploadStyles = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107 114 128);
  border-width: 1px;
`;

const ImageUpload = ({ name, className, ...rest }) => {
  return (
    <label className={className}>
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
    </label>
  );
};

export default ImageUpload;
