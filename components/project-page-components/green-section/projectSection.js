import React from "react";

const ProjectSection = (props) => {
  return (
    <div className={`${props.width} ${props.customStyleSpacing} block py-8 lg:py-12`}>
       <h5 className={`${props.color} ${props.customStyleHeading} `}>
            {props.heading}
          </h5>
          <p className={` ${props.customStyleDesc} text-desc-colour mt-2`}>
          {props.desc}
          </p>
    </div>
  );
}; 

export default ProjectSection;
