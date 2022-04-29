import { Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>1</Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
