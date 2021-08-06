import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";

const ProjectSectionHome = (props) => {
  return (
    <NavLink to={props.destination}  className={props.className + " w-screen h-auto flex flex-col"}>
    
        <Image hoverImage={props.hoverImage} image={props.image} />
        <Description
          hoverDesc={props.hoverDesc}
          title={props.title}
          desc={props.desc}
        />
    </NavLink>
  );
};

export default ProjectSectionHome;
