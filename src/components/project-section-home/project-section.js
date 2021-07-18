import React from "react";
import Image from "./project-section-home-components/image";
import Description from "./project-section-home-components/description";
import IntroText from "./project-section-home-components/introText";
const ProjectSection = (props) => {
  return (
    <div className="w-screen">
      <div className="container w-4/5 mx-auto">
        <p className="font-avenir-bold text-red">Human Centred Designer</p>
      </div>
      <IntroText
        text="   I design intuitive digital experiences in which every element serves a
        purpose. My designs give form to product visions, and arouses emotions
        in the users."
      />
      <Image className={props.className} />
      <Description title={props.title} desc={props.desc} />
    </div>
  );
};

export default ProjectSection;
