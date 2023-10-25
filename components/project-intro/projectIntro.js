import React from "react";

const ProjectIntro = (props) => {
  return (
    <div className="w-full">
      <div className="mt-24 flex flex-col">
        <h3 className="text-title-colour">
          {props.title}
        </h3>
      </div>
      <div className="mt-3 text-desc-colour">
        <p>{props.miniDesc.role} </p>
        <p>{props.miniDesc.firm}</p>
        <p>{props.miniDesc.duration}</p>
      </div>
      <div className="my-28 overflow-hidden md:rounded-lg">
        <img src={props.image} alt="temp" />
      </div>
    </div>
  );
};

export default ProjectIntro;
