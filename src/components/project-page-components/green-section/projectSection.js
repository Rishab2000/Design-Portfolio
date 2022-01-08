import React from "react";

const ProjectSection = (props) => {
  return (
    <div className={`${props.width} ${props.customStyleSpacing} block py-8 lg:py-12`}>
       <p className={`${props.color} ${props.customStyleHeading}  font-avenir-medium text-xl lg:text-2xl`}>
            {props.heading}
          </p>
          <span className={` ${props.customStyleDesc} text-desc-colour font-avenir-book text-base md:text-lg mt-2`}>
          {props.desc}
          </span>
    </div>
  );
}; 

export default ProjectSection;
