import React from "react";

const IntroText = (props) => {
  return (
    <div className={ props.className + "  pt-24 lg:pr-30 xl:pr-0 "}>
      <p className="font-avenir-book text-base lg:text-5xl xl:text-6xl xl:leading-9 text-title-colour">
        {props.text}
      </p>
    </div>
  );
};

export default IntroText;
