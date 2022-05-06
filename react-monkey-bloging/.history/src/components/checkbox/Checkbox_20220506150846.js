import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        className="hidden-input"
        onChange={() => {}}
        {...field}
        {...rest}
      />
    </label>
  );
};

export default Checkbox;
