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
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-7 h-7 rounded flex items-center justify-center ${
            checked ? "bg-green-400 text-white" : "bg-gray-200 text-transparent"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Checkbox;
