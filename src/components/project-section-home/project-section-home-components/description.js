import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Description = (props) => {
  return (
    <div className="w-10/12 lg:w-full mx-auto lg:mx-0  pt-5 lg:pt-5    pb-20 lg:pb-0">
      <p className="font-avenir-bold text-lg lg:text-xl lg:mb-4 text-title-colour">
        {props.title}
      </p>
      {/* <p className="font-avenir-book text-sm text-desc-colour">{props.desc}</p> */}
      <div>
        <ArrowForwardIcon className="group-hover:text-red ml-auto mt-4 lg:mt-8 transition-all duration-300 ease-in-out text-background-color" />
      </div>
    </div>
  );
};

export default Description;
