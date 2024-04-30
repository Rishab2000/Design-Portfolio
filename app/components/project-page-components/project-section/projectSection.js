import React from "react";

const ProjectSection = (props) => {
  return (
    <div className={`${props.width} ${props.customStyleSpacing} ${props.className} block py-8`}>
      <h3 className={`${props.color} ${props.customStyleHeading} w-7/12`}>
        {props.heading}
      </h3>
      <div className={` ${props.customStyleDesc} text-text-primary mt-[17px] md:w-11/12 lg:w-10/12 xl:w-9/12`}>

        {props.children}

      </div>
    </div>
  );
};

export default ProjectSection;
