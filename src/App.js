import React, { Fragment } from "react";
import "./tailwind.generated.css";
import style from "./App.module.css";
import { Card, Navbar, Header } from "./component";
import ModalItem from "./component/Modal/ModalItem";


function App() {
  return (
    <Fragment>
      <div className="App">
      <div>
        <Navbar />
        <Header />
        <Card />
        <ModalItem/>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
