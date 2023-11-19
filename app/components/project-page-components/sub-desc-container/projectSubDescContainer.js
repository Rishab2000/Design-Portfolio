import React from "react";

const ProjectSubDescContainer = (props) => {

  return (
    <div className={props.className + " my-8 md:w-full lg:w-11/12 xl:w-10/12 2xl:w-8/12 mr-auto"}>
        
      <h4 className="text-text-primary"> {props.sectionTitle}</h4>
      {props.children}
    </div>
  );
};

export default ProjectSubDescContainer;
