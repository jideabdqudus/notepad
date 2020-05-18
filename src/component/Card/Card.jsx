import React, {useState} from "react";
import {
  Jumbotron,
  Container,
  Toast,
  ToastBody,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  ToastHeader,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";



const Card = () => {

  const [items, setItems] = useState([{text:"", key:""}])

  const formSubmitted =(e)=>{
    e.preventDefault()
    console.log(items)
  }

  const formChange =(e)=>{
    e.preventDefault();
    setItems([{text:e.target.value, key:Date.now()}])
  }

  return (
    <div>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <Jumbotron>
          <Container>
            <div>
              <h3 className="display-4">What to do?</h3>
              <a href="#!" className="lead" size="sm">
                Delete all Posts
              </a>
              <br />
              <br />
              <div>
                <Row>
                  <Col sm={10}>
                    <Toast>
                      <ToastHeader icon="danger">Important</ToastHeader>
                      <ToastBody>Scholarship Application!</ToastBody>
                    </Toast>
                  </Col>
                  <Col sm={2}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm={10}>
                    <Toast>
                      <ToastHeader icon="warning">Important</ToastHeader>
                      <ToastBody>Submit Info</ToastBody>
                    </Toast>
                  </Col>
                  <Col sm={2}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </Col>
                </Row>
                
              </div>
              <br />
              <Form onSubmit={formSubmitted}>
                <Row form>
                  <Col sm={10}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="items"
                        id="todoItems"
                        placeholder="Add an Option here"
                        value={items.text}
                        onChange={formChange}
                        />
                    </FormGroup>
                  </Col>
                  <Col sm={2}>
                    <Button type="submit" outline color="success">
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </Jumbotron>
      </Col>
    </div>
  );
};

export default Card;
