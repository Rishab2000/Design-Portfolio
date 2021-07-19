import React from "react";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";

const ProjectSectionHome = (props) => {
  return (
    <div className="w-screen">  
      <Image className={props.className} />
      <Description title={props.title} desc={props.desc} />
    </div>
  );
};

export default ProjectSectionHome;
