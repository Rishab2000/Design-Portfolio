import React from "react";
import ProjectSubDescContainer from "../sub-desc-container";

const ProjectMainDescContainer =(props)=>{
    return(<div><ProjectSubDescContainer sectionTitle={props.sectionTitle} numberOfSections={props.numberOfSections} /></div>);
}

export default ProjectMainDescContainer;