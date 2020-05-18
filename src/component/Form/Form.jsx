import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Form = () => {
  return (
    <div id="form">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Important</option>
            <option>Warning</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Form;
