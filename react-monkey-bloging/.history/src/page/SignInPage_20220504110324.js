import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //     useEffect(() => {
  //       if (!userInfo.email) navigate("/sign-up");
  //       else navigate("/");
  //     }, []);

  const handleSignIn = () => {};
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <AuthenticationPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autocomplete="off"
      >
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="text"
            name="email"
            placeholder="Please enter your email address"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {togglePassword ? (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
