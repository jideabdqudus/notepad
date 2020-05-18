import React from "react";
import {
  Jumbotron,
  Container,
  Toast,
  ToastBody,
  Row,
  Col,
  Button,
  ToastHeader,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <Jumbotron>
          <Container>
            <div>
              <h3 className="display-4">What to do?</h3>
              <a href="#!" className="lead" size="sm">Delete all Posts</a>
              <br /><br/>
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
            </div>
          </Container>
        </Jumbotron>
      </Col>
    </div>
  );
};

export default Card;
