import { DropdonwProvider } from "contexts/dropdown-context";
import React, { useState } from "react";
const Dropdown = ({
  placeholder = "Please select an option",
  chldren,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  return (
    <DropdonwProvider {...props}>
      <div className="relative inline-block w-full">
        <div className="flex items-center justify-between p-5 rounded cursor-pointer bg-[#E7ECF3]"></div>
      </div>
    </DropdonwProvider>
  );
};

export default Dropdown;
