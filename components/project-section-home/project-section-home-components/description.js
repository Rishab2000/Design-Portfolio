import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Description = (props) => {
  return (
    <div className="w-10/12 lg:w-full  pt-5 lg:pt-5    pb-20 lg:pb-0">
      <div className="lg:mb-4 text-title-colour">
        {props.title}
      </div>
      {/* <p className="font-avenir-book text-sm text-desc-colour">{props.desc}</p> */}
      <div className="group-hover:text-red ml-auto mt-4 lg:mt-8 transition-all duration-300 ease-in-out text-background-color">
        <ArrowForwardIcon  /> 
      </div>
    </div>
  );
};

export default Description;
