import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 "}>
      <p className="font-avenir-book text-base md:text-5xl xl:text-6xl text-title-colour">
        {props.text}
      </p>
    </div>
  );
};

export default IntroText;
