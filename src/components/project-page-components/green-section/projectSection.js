import React from "react";

const ProjectSection = (props) => {
  return (
    <div className="my-4 ">
       <p className="font-avenir-medium text-lg text-green-sdplus">
            {props.heading}
          </p>
          <span className="font-avenir-book text-base mt-2">
          {props.desc}
          </span>
    </div>
  );
};

export default ProjectSection;
