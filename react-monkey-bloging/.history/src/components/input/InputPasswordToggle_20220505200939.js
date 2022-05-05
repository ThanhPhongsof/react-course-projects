import { IconEyeClose, IconEyeOpen } from "components/icon";
import React, { Fragment, useState } from "react";
import Input from "./Input";

const InputPasswordToggle = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
