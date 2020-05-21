import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";

class Card extends Component {
  state = {
    message: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state.message);
    this.setState({ message: "" });
  };

  onChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Jumbotron>
            <Container>
              <div>
                <h3 className="display-4">What to do?</h3>
                <a
                  href="#!"
                  className="lead"
                  size="sm"
                  onClick={this.props.deleteAllItem}
                >
                  Delete all Posts
                </a>
                {this.props.todos.map((todo) => {
                  return (
                    <CardItem
                      key={todo.id}
                      todo={todo}
                      deleteItem={this.props.deleteItem}
                      completedItem={this.props.completedItem}
                    />
                  );
                })}
                <br />
                <Form onSubmit={this.onSubmit}>
                  <Row form>
                    <Col sm={10}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="message"
                          id="todoItems"
                          placeholder="Add an Option here"
                          value={this.state.message}
                          onChange={this.onChange}
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
  }
}

export default Card;
