import React, { Fragment, Component } from "react";
import "./tailwind.generated.css";
import { Card, Navbar, Header } from "./component";

class  App extends Component {
  state = {
    todos:[
      {
        id:1,
        message:"Wash the car",
        
      }
    ]
  }

  return (
    <Fragment>
      <div className="App">
        <div>
          <Navbar />
          <Header />
          <Card todos={this.state.todos} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
