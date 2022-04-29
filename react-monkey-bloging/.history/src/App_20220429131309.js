import { Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Route></Route>
      </AuthProvider>
    </div>
  );
};

export default App;
