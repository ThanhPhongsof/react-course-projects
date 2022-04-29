import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
