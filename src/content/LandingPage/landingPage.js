import React from "react";
import ProjectSectionHome from "../../components/project-section-home";
const LandingPage = () => {
    
  return (
    <div className="z-20">
      <ProjectSectionHome
        className="bg-sd-plus"
        title="SD+ | UX Design Internship"
        desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the 
        product to identify parts of the product needing engagement and improved them, adopting an agile model."
      />
      <ProjectSectionHome
        className="bg-chiral"
        title="Chiral Colonies - Climate change app | UX Case study "
        desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults. 
        Working towards a substainable future by changing human behaviour."
      />
      <ProjectSectionHome
        className="bg-coding-challenge"
        title="30 Days Of Code "
        desc="A personal project I took up in which I coded 30 interactive components using HTML, CSS and Jquery."
      />
      <ProjectSectionHome
        className="bg-behance"
        title="Behance Search Experience Redesign  "
        desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics. 
        Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
      />
    </div>
  );
};

export default LandingPage;
