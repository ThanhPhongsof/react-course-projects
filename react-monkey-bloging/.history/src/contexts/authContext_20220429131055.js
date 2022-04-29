import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const values = { userInfo, setUserInfo };
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export { useAuth, AuthProvider };
