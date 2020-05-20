import React, { Component } from "react";
import { Toast, ToastBody, Row, Col, ToastHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class CardItem extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col sm={10}>
              <Toast>
                <ToastHeader
                  icon={this.props.todo.completed ? "danger" : "success"}
                >
                  Important
                </ToastHeader>
                <ToastBody>{this.props.todo.message}</ToastBody>
              </Toast>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </Col>
          </Row>
          <br />
        </div>
      </div>
    );
  }
}

export default CardItem;
