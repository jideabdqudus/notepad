import React, { Fragment } from "react";
import "./tailwind.generated.css";
import style from "./App.module.css";
import { Card, Navbar, Header } from "./component";

function App() {
  return (
    <Fragment>
      <div className="App">
      <div className={style.body}>
        <Navbar />
        <Header />
        <Card />
      </div>
      </div>
    </Fragment>
  );
}

export default App;
