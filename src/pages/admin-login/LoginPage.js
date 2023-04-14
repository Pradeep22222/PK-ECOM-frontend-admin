import React, {useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  useDispatch} from "react-redux";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CustomInputField } from "../../components/customInputfields/CustomInputField";
import { logInUserAction } from "./userAction";

const LoginPage = () => {
  const dispatch=useDispatch()
  const [form,setForm] =useState({})
  const handleOnChange = e => {
    const { name, value } = e.target;
    setForm({...form, [name]:value})
  }
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(form)
    dispatch(logInUserAction(form));
  }
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1>Admin login</h1>
            <CustomInputField
              onChange={handleOnChange}
              label="email"
              name="email"
              type="email"
              placeholder="pradeepdhital001@gmail.com"
              required
            ></CustomInputField>
            <CustomInputField
              onChange={handleOnChange}
              label="password"
              name="password"
              type="password"
              placeholder="********"
              required
            ></CustomInputField>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
