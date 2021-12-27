import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 "}>
      <p className="font-avenir-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-title-colour">
        {props.textHeading}
      </p>
      <p className="font-avenir-book mt-2 lg:mt-8 text-sm sm:text-base md:text-md lg:text-xl lg:w-9/12 xl:text-xl 2xl:text-2xl text-desc-colour">{props.caption}</p>
    </div>
  );
};

export default IntroText;
