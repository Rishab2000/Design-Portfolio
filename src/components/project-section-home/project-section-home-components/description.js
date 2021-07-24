import React from "react";
import Button from "../../button";
const Description = (props) => {
  return (
    <div className="container w-4/5 lg:w-4/12 mx-auto    pt-10 lg:pt-0    pb-20 lg:pb-0">
      <p className="font-avenir-medium text-lg mb-4">
          {props.title}
      
      </p>
      <p className="font-avenir-book text-sm text-desc-colour">
          {props.desc}
        
      </p>
      <Button destination={"/"}/>
    </div>
  );
};

export default Description;
