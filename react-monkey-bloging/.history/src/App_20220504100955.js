import SignInPage from "page/SignInPage";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./page/SignUpPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
