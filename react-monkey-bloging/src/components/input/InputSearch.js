import React from "react";

const InputSearch = ({ placeholder = "", onChange = () => {} }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default InputSearch;
