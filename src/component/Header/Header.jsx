import React from "react";
import cx from "classnames";
import style from "./Header.module.css";
import { Container, Row, Col, Button } from "reactstrap";

const Header = () => {
  return (
    <Container className="themed-container" fluid="md">  
    <div className={style.container}>
    <Row>
        <Col sm="12" md={{ size: 6, offset: 5 }}>
        <Button color="primary" size="lg">Large Button</Button>
        </Col>
    </Row>
    </div>
    </Container>
  );
};

export default Header;
