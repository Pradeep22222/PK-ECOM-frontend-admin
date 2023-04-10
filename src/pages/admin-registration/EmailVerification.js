import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { emailVerifyAdminUser } from "../../helpers/axiosHelper";

const EmailVerification = () => {
  const [isPending, setIsPending] = useState(true);
  const [queryParams] = useSearchParams();
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    // call axios to call the server
    (async () => {
      const result = await emailVerifyAdminUser(obj);
    })();
  }, []);
  return (
    <div>
      <Header></Header>
      <Container className="page-main">
        {isPending && (
          <Card className="mt-5 p-2" style={{ width: "45rem" }}>
            <Spinner
              variant="primary"
              animation="border"
              className="m-auto p-3"
            ></Spinner>
            <h4>Email verification process begun, please wait......</h4>
          </Card>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default EmailVerification;
