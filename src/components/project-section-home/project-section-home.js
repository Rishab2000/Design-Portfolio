import React from "react";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";

const ProjectSectionHome = (props) => {
  return (
    <div className={ props.className + " w-screen h-auto lg:mb-12 flex flex-col"}>  
      <Image image={props.image} />
      <Description title={props.title} desc={props.desc} />
    </div>
  );
};

export default ProjectSectionHome;
