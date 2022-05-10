import { useDropdown } from "contexts/dropdown-context";
import React from "react";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <Fragment>
      {show && (
        <div className="absolute left-0 w-full bg-white shadow-sm top-full">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default List;
