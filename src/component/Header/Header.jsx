import React, { useState } from "react";
import style from "./Header.module.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Container className="themed-container" fluid="md">
      <div className={style.container}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 5 }}>
            <Button color="danger" onClick={toggle}>
              What should i do?
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} close={closeBtn}>
                Selected Option
              </ModalHeader>
              <ModalBody>
                <p>Edit Resume & Submit IBM Applications</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Okay
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
