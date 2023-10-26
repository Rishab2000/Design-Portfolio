import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 "}>
      <span className="text-title-colour">
        {props.textHeading}
      </span> 
      <h5 className="mt-2 lg:mt-8 lg:w-9/12 text-desc-colour">{props.caption}</h5>
    </div>
  );
};

export default IntroText;
