import React from "react";

const NormalContainer = (props) => {
  return (
    <div className={props.containerClass + " flex flex-wrap justify-center my-40"}>
      <iframe
        title="Finish"
        src={
          process.env.PUBLIC_URL +
          "/images/coding-challenges/challenges/"+ props.challenge +"/index.html"
        }
        className={props.windowClass + " w-100 h-100"}
      ></iframe>
      <div className={props.desClass + " w-96"}>
        <p className="text-3xl font-avenir-book">{props.day}</p>
        <p className="text-3xl font-avenir-bold">{props.title}</p>
        <p className="text-xl font-avenir-book">{props.desc}</p>
      </div>
    </div>
  );
};

export default NormalContainer;
