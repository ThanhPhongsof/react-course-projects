import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  //   const { userInfo } = useAuth();
  //   const navigate = useNavigate();
  //     useEffect(() => {
  //       if (!userInfo.email) navigate("/sign-up");
  //       else navigate("/");
  //     }, []);

  const handleSignIn = () => {};

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}></form>
    </AuthenticationPage>
  );
};

export default SignInPage;
