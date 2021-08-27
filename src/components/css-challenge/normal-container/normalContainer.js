import React from "react";

const NormalContainer = (props) => {
  return (
    <div
      className={
        props.containerClass + " flex flex-wrap justify-center my-32 lg:my-40"
      }
    >
      <iframe
        title="Finish"
        src={
          process.env.PUBLIC_URL +
          "/images/coding-challenges/challenges/" +
          props.challenge +
          "/index.html"
        }
        className={
          props.windowClass + " w-60 h-60  lg:w-100 lg:h-100 mb-8 lg:mb-0"
        }
      ></iframe>
      <div className={props.desClass + " lg:w-96"}>
        <p className="lg:text-3xl font-avenir-book text-desc-colour opacity-50">
          {props.day}
        </p>
        <p className="lg:text-3xl font-avenir-bold text-title-colour">
          {props.title}
        </p>
        <p className="lg:text-xl font-avenir-book text-desc-colour">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default NormalContainer;
