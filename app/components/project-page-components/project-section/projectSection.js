import React from "react";

const ProjectSection = (props) => {
  return (
    <div className={`${props.width} ${props.customStyleSpacing} block py-8`}>
      <h5 className={`${props.color} ${props.customStyleHeading}`}>
        {props.heading}
      </h5>
      <div className={` ${props.customStyleDesc} text-text-secondary mt-2`}>
        
          {props.desc}
        
      </div>
    </div>
  );
};

export default ProjectSection;
