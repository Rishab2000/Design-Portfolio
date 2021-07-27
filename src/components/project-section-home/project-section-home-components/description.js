import React from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Description = (props) => {
  return (
    <div className="w-10/12 lg:w-12/12   pt-10 lg:pt-5    pb-20 lg:pb-0">
      <p className="font-avenir-medium text-lg mb-4 text-title-colour">{props.title}</p>
      {/* <p className="font-avenir-book text-sm text-desc-colour">{props.desc}</p> */}
      <div className="group-hover:text-red mt-8 transition-all duration-300 ease-in-out text-background-color">
        <ArrowForwardIcon style={{fontSize:40}}/>
      </div>
    </div>
  );
};

export default Description;
