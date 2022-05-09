import React from "react";

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
