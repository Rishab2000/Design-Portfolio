import React from "react";

const IntroText = (props) => {
  return (
    <div className="container w-4/5 mx-auto pt-10 pb-20">
      <p className="font-avenir-book text-base text-desc-colour">
        {props.text}
      </p>
    </div>
  );
};

export default IntroText;
