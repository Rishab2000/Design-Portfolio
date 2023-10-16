import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 "}>
      <h1 className="text-title-colour">
        {props.textHeading}
      </h1>
      <p className="mt-2 lg:mt-4 lg:w-9/12 text-desc-colour">{props.caption}</p>
    </div>
  );
};

export default IntroText;
