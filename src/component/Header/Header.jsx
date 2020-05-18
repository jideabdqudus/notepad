import React from "react";
import cx from "classnames";
import style from "./Header.module.css";
import { Container, Row, Col, Button } from "reactstrap";

const Header = () => {
  return (
    <Container className="themed-container" fluid="md">
    <Row xs="2">
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col>Column</Col>
  </Row>  
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Button color="primary" size="lg">Large Button</Button>
        </Col>
    </Row>
    </Container>
  );
};

export default Header;
