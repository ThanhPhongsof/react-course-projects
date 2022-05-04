import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  //   useEffect(() => {

  //   }, [])
  console.log(userInfo);
  return <div></div>;
};

export default SignInPage;
