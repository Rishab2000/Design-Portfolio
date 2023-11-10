import React from "react";

const IntroText = (props) => {
  return (
    <div className={props.className + "  "}>
      <span className="text-text-primary">
        {props.textHeading}
      </span>
      <div className="mt-2 lg:mt-8 flex lg:flex-row lg:gap-16 flex-col gap-1">
        <span><p className="label text-text-primary">Currently, product designer&nbsp;<span className="label text-text-placeholder">@IBM</span></p></span>
        <span><p className="label text-text-primary">Bachelors in Design,&nbsp;<span className="label text-text-placeholder">Human Centred  Design '22</span> </p></span>
      </div>
    </div>
  );
};

export default IntroText;
 