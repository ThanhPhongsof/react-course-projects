import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return <div></div>;
};

export default Checkbox;
