import React from "react";

const ProjectSection = (props) => {
  return (
    <div className={props.width +  " my-4 lg:my-12"}>
       <p className={`${props.color} font-avenir-medium text-lg lg:text-2xl`}>
            {props.heading}
          </p>
          <span className={" font-avenir-book text-base lg:text-xl mt-2"}>
          {props.desc}
          </span>
    </div>
  );
};

export default ProjectSection;
