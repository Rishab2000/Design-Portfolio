import React from "react";
import { Image } from "@nextui-org/react";

const ImageSection = (props) => {
  return (
    <div
      className={
        "w-full h-auto overflow-hidden md:rounded-lg"
      }
    ><Image removeWrapper src={props.image} alt="temp" className="object-cover"/></div> 
  );
};

export default ImageSection;
