import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CustomInputField } from "../../components/customInputfields/CustomInputField";

const LoginPage = () => {
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form>
            <h1>Admin login</h1>
            <CustomInputField
              label="email"
              name="email"
              type="email"
              placeholder="pradeepdhital001@gmail.com"
              required
            ></CustomInputField>
            <CustomInputField
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
