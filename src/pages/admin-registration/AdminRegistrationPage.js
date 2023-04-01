import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputField } from "../../components/customInputfields/CustomInputField";
const AdminRegistrationPage = () => {
  const field = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Pradeep",
      required: "true",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Dhital",
      required: "true",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Pradeepdhital22@gmail.com",
      required: "true",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0451644397",
      required: "true",
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      placeholder: "dd/mm/yy",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "1-3 Clarence Street Strathfield",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: "true",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      required: "true",
    },
  ];
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        <div className="form">
          <Form>
            <h1>New admin registration</h1>
            {field.map((item, i) => (
              <CustomInputField key={i}{...item}></CustomInputField>
            ))}
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AdminRegistrationPage;
