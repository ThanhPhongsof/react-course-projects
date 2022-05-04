import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  return <AuthContext.Provider {...props} value={value}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export { useAuth, AuthProvider };
