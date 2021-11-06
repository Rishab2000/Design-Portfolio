import React from "react";

const Image = (props) => {
  return (
    <div
      className={
        "w-full h-auto overflow-hidden md:rounded-lg"
      }
    ><img src={props.image} alt="temp" className="object-cover"/></div>
  );
};

export default Image;
