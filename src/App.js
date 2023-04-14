import "./App.css";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer />
    </div>
  );
}
export default App;
