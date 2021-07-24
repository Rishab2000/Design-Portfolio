import React from "react";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";

const ProjectSectionHome = (props) => {
  return (
    <div className={ props.className + " w-screen lg:w-4/5    lg:mx-auto lg:mb-12   lg:flex lg:items-center"}>  
      <Image className={props.image} />
      <Description title={props.title} desc={props.desc} />
    </div>
  );
};

export default ProjectSectionHome;
