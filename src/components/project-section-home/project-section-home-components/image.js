import React from "react";

const Image = (props) => {
  return (
    <div
      className={ props.className +
        " bg-red lg:bg-no-repeat w-full h-auto overflow-hidden"
      }
    ><img src={props.image} alt="temp" className="object-cover"/></div>
  );
};

export default Image;
