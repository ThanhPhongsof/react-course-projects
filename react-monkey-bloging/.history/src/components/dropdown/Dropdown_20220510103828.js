import { DropdonwProvider } from "contexts/dropdown-context";
import React, { useState } from "react";
const Dropdown = ({
  placeholder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  return (
    <DropdonwProvider {...props}>
      <div className="relative inline-block w-full">
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
