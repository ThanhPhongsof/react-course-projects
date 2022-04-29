import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
};
