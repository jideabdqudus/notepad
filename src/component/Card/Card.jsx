import React from "react";
import {
  Jumbotron,
  Container,
  Toast,
  ToastBody,
  Row,
  Col,
  ToastHeader,
} from "reactstrap";

const Card = () => {
  return (
    <div>
    
      <Col sm="12" md={{ size: 4, offset: 4 }}>
      <Jumbotron>
        <div>
          <div>
            <h1 className="display-3">Schedule</h1>
            <Toast>
              <ToastHeader icon="primary">Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast with a primary icon — check it out!
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader icon="secondary">Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast with a secondary icon — check it out!
              </ToastBody>
            </Toast>
            <Toast>
              <ToastHeader icon="success">Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast with a success icon — check it out!
              </ToastBody>
            </Toast>
          </div>
        </div>
      </Jumbotron>
      </Col>
    </div>
  );
};

export default Card;
