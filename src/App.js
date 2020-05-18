import React, { Fragment } from "react";
import "./tailwind.generated.css";
import { Card, Navbar, Header } from "./component";

function App() {
  return (
    <Fragment>
      <div className="App">
      <div>
        <Navbar />
        <Header />
        <Card />
      </div>
      </div>
    </Fragment>
  );
}

export default App;
