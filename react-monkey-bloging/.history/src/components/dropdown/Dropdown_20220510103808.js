import { DropdonwProvider } from "contexts/dropdown-context";
import React, { useState } from "react";
import Select from "./Select";
const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  return (
    <DropdonwProvider {...props}>
      <div className="relative inline-block w-full">
        <Select></Select>
        {show && (
          <div className="absolute left-0 w-full bg-white shadow-sm top-full">
            {children}
          </div>
        )}
      </div>
    </DropdonwProvider>
  );
};

export default Dropdown;
