import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./page/SignUpPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
