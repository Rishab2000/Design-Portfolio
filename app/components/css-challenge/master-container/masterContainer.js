import React from "react";
import Iframe from "react-iframe";

const MasterContainer = (props) => {
  return (
    <div className={props.className + " w-full"}>
    {props.children}
  </div> 
  );
};

export default MasterContainer;
