import React from "react";

const ProjectSubDescContainer = (props) => {

  return (
    <div className={props.className + " my-8 lg:w-8/12 mr-auto"}>
        
      <p className="font-avenir-bold text-3xl lg:text-5xl"> {props.sectionTitle}</p>
      {props.children}
    </div>
  );
};

export default ProjectSubDescContainer;
