import React from "react";

const ProjectGreenSection = (props) => {
  return (
    <div className="my-4 ">
       <p className="font-avenir-medium text-lg text-green-sdplus">
            {props.greenHeading}
          </p>
          <span className="font-avenir-book text-base mt-2">
          {props.greenDesc}
          </span>
    </div>
  );
};

export default ProjectGreenSection;
