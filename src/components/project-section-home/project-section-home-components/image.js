import React from "react";

const Image = (props) => {
  return (
    <div
      className={
        props.className +
        " bg-cover bg-center bg-red bg-cover lg:bg-contain lg:bg-no-repeat w-full h-96 "
      }
    ></div>
  );
};

export default Image;
