import React from "react";

const Description = (props) => {
  return (
    <div className="container w-4/5 mx-auto pt-10">
      <p className="font-avenir-medium text-lg mb-4">
          {props.title}
      
      </p>
      <p className="font-avenir-book text-sm text-desc-colour">
          {props.desc}
        
      </p>
    </div>
  );
};

export default Description;
