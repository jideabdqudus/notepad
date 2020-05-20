import React, { Component } from "react";
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
import CardItem from "./CardItem";


class Card extends Component  {


  render(){
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
              
              {this.props.todos.map((todo)=>{
                return  <CardItem key={todo.id} todo={todo} deleteItem={this.props.deleteItem}/>
              })}
              <br />
              <Form>
                <Row form>
                  <Col sm={10}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="items"
                        id="todoItems"
                        placeholder="Add an Option here"
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
};

export default Card;

// const [items, setItems] = useState("");

//   const formSubmitted = (e) => {
//     e.preventDefault();
//     if (items === ""){
//       return <p>Please enter a message</p>
//     }else{
//       const newItem = {
//         items,
//         key: new Date ()
//       }

//       addItem (newItem);
//       setItems("")

//     }
//   };
