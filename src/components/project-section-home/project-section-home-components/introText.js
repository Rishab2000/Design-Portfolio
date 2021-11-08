import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 "}>
      <p className="font-avenir-book text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-title-colour">
        {props.textHeading}
      </p>
      <p className="font-avenir-book mt-2 lg:mt-8 text-xs sm:text-base md:text-md lg:text-xl lg:w-9/12 xl:text-xl 2xl:text-2xl text-desc-colour">{props.caption}</p>
    </div>
  );
};

export default IntroText;
