import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./content/LandingPage/landingPage";

function App() {
  const [hidden, visible] = useState(false);
  const clickHandler = () => {
    if (hidden === false) {
      visible(true);
    } else if (hidden === true) {
      visible(false);
    }
    console.log(hidden);
  };

  return (
    <div className="w-screen mt-16 bg-background-color">
      <Header hidden={hidden} clickHandler={clickHandler} />
      <Switch>
        <Route exact path="/">
          <LandingPage hidden={hidden}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
