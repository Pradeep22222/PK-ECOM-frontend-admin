import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

const LoginPage = () => {
  return (
    <div>
      <Header></Header>
      <Container className="page-main"></Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
