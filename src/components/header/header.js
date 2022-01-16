import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MobileNav from "./mobileNav";

import "./header.css";

const Header = (props) => {
  const hamburgerState = props.hidden ? "open" : " ";
  const headerState = props.hidden ? "opacity-0" : " ";
  return (
    <div className="pt-16 w-full">
      <MobileNav
        clickHandler={props.clickHandler}
        status={props.hidden}
        className="lg:hidden"
      />
      <header className=" flex items-center">
        <h1
          className={
            headerState +
            " font-avenir-regular text-xl lg:text-2xl transtion-opacity duration-300 ease-in"
          }
        >
          
        </h1>
        <div
          onClick={props.clickHandler}
          className={hamburgerState + " nav-icon3 ml-auto lg:hidden"}
        >
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
          <span className="nav-icon3-bar"></span>
        </div>
        <div className="hidden font-avenir-regular lg:flex lg:ml-auto lg:gap-8 lg:text-xl lg:text-gray40">
          <NavLink
            exact
            to="/"
            activeStyle={{
              color: "#161616",
            }}
            className="hover:text-link-hover-color"
          >
            Work
          </NavLink>
          <a href="https://medium.com/@rishabs" rel="noreferrer" target="_blank" className="hover:text-link-hover-color">
            Blog
          </a>
          <NavLink
            to="/AboutMe"
            activeStyle={{
              color: "#161616",
            }}
            className="hover:text-link-hover-color"
          >
            About me
          </NavLink>
        </div>
      </header>
      <div className={headerState + " transtion-opacity duration-300 ease-in"}>
        <p className="font-avenir-medium pt-1 lg:pt-2 lg:text-2xl text-red">
          
        </p>
      </div>
    </div>
  );
};

export default Header;
// Giving form to product visions."
