import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInputField } from "../customInputfields/CustomInputField";

export const AddCatForm = () => {
  return (
    <Form>
      <h4>
        <Row>
          <Col>
            <Form.Check name="status" label="status" type="switch"></Form.Check>
          </Col>
          <Col>
          <Form.Select name="parentId">
                          
            </Form.Select>
          </Col>
          <Col>
            
          </Col>
          <Col>
            <Button>Add</Button>
          </Col>
        </Row>
      </h4>
    </Form>
  );
};
