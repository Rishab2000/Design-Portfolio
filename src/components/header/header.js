import React from "react";
import MobileNav from "./mobileNav";
import IntroText from "../project-section-home/project-section-home-components/introText";

import "./header.css";

const Header = (props) => {

 const hamburgerState = props.hidden ? "open" : " ";
 const headerState = props.hidden ? "opacity-0" : " ";
  return (
    <div className="pt-16 w-full">
      <MobileNav status={props.hidden} />
      <header className=" flex items-center">
        <h1 className={ headerState +  " font-avenir-black text-xl transtion-opacity duration-300 ease-in"}>Rishab</h1>
        <div
          onClick={props.clickHandler}
          className={hamburgerState + " nav-icon3 ml-auto"}
        >
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
        </div>
      </header>
      <div className={ headerState + " transtion-opacity duration-300 ease-in"}>
        <p className= "font-avenir-bold text-red">Human Centred Designer</p>
      </div>
      <IntroText className ={headerState+ " transtion-opacity duration-300 ease-in"} 
        text=" Rishab is bangalore based UX designer with a tendancy to design intuitive digital experiences in which every element serves a
        purpose."
      />
    </div>
  );
};

export default Header;
// Giving form to product visions."