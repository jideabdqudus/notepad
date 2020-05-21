import React, { Component } from 'react'
import CardItem from "./CardItem"

class CardMapLoop extends Component () {
    render(){
    return (
        this.props.todos.map((todo) => {
            return (
              <CardItem
                key={todo.id}
                todo={todo}
                deleteItem={this.props.deleteItem}
                completedItem={this.props.completedItem}
              />
            );
          })
    )
}
}
export default CardMapLoop
