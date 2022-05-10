import { DropdonwProvider } from "contexts/dropdown-context";
import React from "react";
const Dropdown = ({ children, ...props }) => {
  return (
    <DropdonwProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdonwProvider>
  );
};

export default Dropdown;
