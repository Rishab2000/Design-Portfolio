import React from "react";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";

const ProjectSectionHome = (props) => {
  return (
    <div className={ props.className + " w-screen  lg:mb-12 flex flex-col"}>  
      <Image className={props.image} />
      <Description title={props.title} desc={props.desc} />
    </div>
  );
};

export default ProjectSectionHome;
