import React, { useState } from "react";
import MobileNav from "./mobileNav";
import IntroText from "../project-section-home/project-section-home-components/introText";

import "./header.css";

const Header = () => {
  const [hidden, visible] = useState(false);

  const clickHandler = () => {
    if (hidden === false) {
      visible(true);
    } else if (hidden === true) {
      visible(false);
    }
    console.log(hidden);
  };

  const hamburgerState = hidden ? "open" : " ";
  return (
    <div>
      <MobileNav status={hidden} />
      <header className="container flex items-center w-4/5 m-auto">
        <h1 className="font-avenir-black text-xl ">Rishab</h1>
        <div
          onClick={clickHandler}
          className={hamburgerState + " nav-icon3 ml-auto"}
        >
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
        </div>
      </header>
      <div className="container w-4/5 mx-auto">
        <p className="font-avenir-bold text-red">Human Centred Designer</p>
      </div>
      <IntroText
        text="   I design intuitive digital experiences in which every element serves a
        purpose. My designs give form to product visions, and arouses emotions
        in the users."
      />
    </div>
  );
};

export default Header;
