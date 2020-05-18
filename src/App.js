import React, { Fragment } from "react";
import "./tailwind.generated.css";
import style from "./App.module.css";
import { Card, Navbar, Header } from "./component";
import { Button } from 'reactstrap';

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
