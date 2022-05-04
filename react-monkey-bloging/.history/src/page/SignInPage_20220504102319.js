import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  //   useEffect(() => {

  //   }, [])
  console.log(userInfo);
  console.log(1);
  return <div></div>;
};

export default SignInPage;
