import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/signup" />} index />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
