import { DropdonwProvider } from "contexts/dropdown-context";
import React, { useState } from "react";
const Dropdown = ({ children, ...props }) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  return (
    <DropdonwProvider {...props}>
      <div className="relative inline-block w-full"></div>
    </DropdonwProvider>
  );
};

export default Dropdown;
