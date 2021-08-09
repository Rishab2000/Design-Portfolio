import React from "react";

const ProjectIntro = (props) => {
  return (
      <div>
          <div className="mt-24 flex flex-col">
        <p className="font-avenir-roman text-title-colour text-2xl">
          {props.title}
        </p>
        <p className="font-avenir-book text-gray40 text-base">
          {props.subTitle}
        </p>
      </div>
      <div className="mt-8 font-avenir-roman text-base text-desc-colour">
        <p>{props.miniDesc.role} </p>
        <p>{props.miniDesc.duration}</p>
        <p>{props.miniDesc.firm}</p>
      </div>
      <div className="my-28 ">
        <img
          src={props.image}
          alt="temp"
        />
      </div>
    </div>
  );
};

export default ProjectIntro;
