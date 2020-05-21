import React, { Fragment, Component } from "react";
import "./tailwind.generated.css";
import { Card, Navbar, Header } from "./component";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        message: "Wash the car",
        completed: false,
      },
      {
        id: 2,
        message: "Clean the House",
        completed: true,
      },
      {
        id: 3,
        message: "Feed the Hen",
        completed: false,
      },
    ],
  };

  completedItem = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
    console.log(id);
  };

  deleteAllItem = () => {
    this.setState({ todos: [] });
  };

  formSubmit =(message) =>{
    const newTodo = {
      id:4,
      message: message,
      completed: false
    }
    this.setState({todos:{...this.state.todos, newTodo}})
  }

  render() {
    const { todos } = this.state;
    const { id } = this.state;

    return (
      <Fragment>
        <div className="App">
          <div>
            <Navbar />
            <Header />
            <Card
              todos={todos}
              id={id}
              deleteItem={this.deleteItem}
              completedItem={this.completedItem}
              deleteAllItem={this.deleteAllItem}
              formSubmit = {this.formSubmit}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
