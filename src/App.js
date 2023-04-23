import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/admin-login/LoginPage";
import AdminRegistrationPage from "./pages/admin-registration/AdminRegistrationPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import Categories from "./pages/categories/Categories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          ></Route>

          <Route
            path="/categories"
            element={
              <PrivateRouter>
                <Categories />
              </PrivateRouter>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          ></Route>
          {/* public routes */}
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
