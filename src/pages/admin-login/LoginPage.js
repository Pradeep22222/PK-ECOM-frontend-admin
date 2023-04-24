import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CustomInputField } from "../../components/customInputfields/CustomInputField";
import { logInUserAction } from "./userAction";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.admin);
  const location = useLocation();
  const origin =
    (location.state && location.state.from && location.state.from.pathname) || "/dashboard"
  useEffect(() => {
    user._id && navigate(origin);
  }, [user, navigate,origin]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUserAction(form));
  };
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1>Admin login</h1>
            <CustomInputField
              onChange={handleOnChange}
              label="Email"
              name="email"
              type="email"
              placeholder="pradeepdhital001@gmail.com"
              required
            ></CustomInputField>
            <CustomInputField
              onChange={handleOnChange}
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              required
            ></CustomInputField>
            <Button type="submit" className="login_button">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
