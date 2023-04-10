import { Button } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/admin-login/LoginPage";
import AdminRegistrationPage from "./pages/admin-registration/AdminRegistrationPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<AdminRegistrationPage />}></Route>
          <Route
            path="/admin/verify-email"
            element={<EmailVerification />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
