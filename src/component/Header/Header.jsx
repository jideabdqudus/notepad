import React,{useState} from "react";
import style from "./Header.module.css";
import { Container, Row, Col, Button } from "reactstrap";

const Header = () => {
  const toggle = () => setModal(!modal);

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  

  return (
    <Container className="themed-container" fluid="md">  
    <div className={style.container}>
    <Row>
        <Col sm="12" md={{ size: 6, offset: 5 }}>
        <Button color="primary" onClick={toggle} size="lg" href="#modal">What should I do?</Button>
        </Col>
    </Row>
    </div>
    </Container>
  );
};

export default Header;

<Button color="danger" onClick={toggle}>
{buttonLabel}
</Button>