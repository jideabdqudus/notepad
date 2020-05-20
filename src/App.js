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
        id: 1,
        message: "Clean the House",
        completed: true,
      },
      {
        id: 1,
        message: "Feed the Hen",
        completed: false,
      },
    ],
  };
  render() {
    const { todos } = this.state;

    return (
      <Fragment>
        <div className="App">
          <div>
            <Navbar />
            <Header />
            <Card todos={todos} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
