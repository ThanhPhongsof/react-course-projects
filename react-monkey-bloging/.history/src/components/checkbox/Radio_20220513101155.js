import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <label>
      <input
        type="radio"
        className="hidden-input"
        checked={checked}
        onChange={() => {}}
        {...field}
        {...rest}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-7 h-7 rounded-full border flex  ${
            checked ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <span>{children}</span>
      </div>
    </label>
  );
};

export default Radio;
