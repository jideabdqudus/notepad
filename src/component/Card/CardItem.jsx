import React, { Component } from "react";
import { Toast, ToastBody, Row, Col, ToastHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export class CardItem extends Component {
  render() {
      const {message, completed, id} = this.props.todo
    return (
      <div>
        <div>
          <Row>
            <Col sm={10}>
              <Toast>
                <ToastHeader
                  icon={completed ? "danger" : "success"}
                >
                  Status
                </ToastHeader>
                <ToastBody>{message}</ToastBody>
              </Toast>
            </Col>
            <Col sm={2}>
              <a href="#!"><FontAwesomeIcon icon={faThumbsUp} size="lg" onClick={this.props.completedItem.bind(this, id)} style={{marginBottom:"10px"}}/></a>
              <a href="#!"><FontAwesomeIcon icon={faTrash} size="lg" onClick={this.props.deleteItem.bind(this, id)} style={{marginTop:"10px"}} /></a>
            </Col>
          </Row>
          <br />
        </div>
      </div>
    );
  }
}

export default CardItem;
