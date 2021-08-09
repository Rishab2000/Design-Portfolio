import React from "react";

const ProjectSubDescContainer = (props) => {

  return (
    <div className="my-4">
        
      <p className="font-avenir-bold text-3xl"> {props.sectionTitle}</p>
      {props.children}
    </div>
  );
};

export default ProjectSubDescContainer;
