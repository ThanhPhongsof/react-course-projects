import React from "react";
import { useController } from "react-hook-form";

const Radio = ({checked, children, control, name, ...rest}) => {
const {field} = useController({ control, name, defaultValue: ""});
  return <label>
    <input 
      type="radio"
      className="hidden-input"
      checked={checked}
      onChange={() => {}}
      {...field}
      {...rest
    />
  </label>;
};

export default Radio;
