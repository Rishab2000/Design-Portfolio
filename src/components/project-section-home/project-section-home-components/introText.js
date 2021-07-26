import React from "react";

const IntroText = (props) => {
  return (
    <div className="container  pt-10 pb-20 lg:pr-80  ">
      <p className="font-avenir-book text-base lg:text-2xl lg:leading-snug text-title-colour">
        {props.text}
      </p>
    </div>
  );
};

export default IntroText;
