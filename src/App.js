import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./content/LandingPage/landingPage";
import Footer from "./components/footer";

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

  const scrolling = hidden ? "overflow-hidden h-screen" : " ";
  return (
    <div className={ scrolling + " w-screen bg-background-color"}>
      <Header hidden={hidden} clickHandler={clickHandler} />
      <Switch>
        <Route exact path="/">
          <LandingPage hidden={hidden}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
