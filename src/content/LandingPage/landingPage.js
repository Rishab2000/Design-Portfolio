import React from "react";
import ProjectSectionHome from "../../components/project-section-home";
const LandingPage = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <div
      className={
        LandingPageState + " z-20 transtion-opacity duration-300 ease-in "
      }
    >
      <ProjectSectionHome
        image="bg-ibm"
        title="IBM Cloud and Cognitive | UX Design Internship | 1yr"
        desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
        product, conducted research - user research and market analysis, created to-be 
        journey maps and designed prototypes for phased implementation of the portal."
      />
      <ProjectSectionHome
        image="bg-sd-plus"
        title="SD+ | UX Design Internship"
        desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the 
        product to identify parts of the product needing engagement and improved them, adopting an agile model."
      />
      <ProjectSectionHome
        image="bg-chiral"
        title="Chiral Colonies - Climate change app | UX Case study "
        desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults. 
        Working towards a substainable future by changing human behaviour."
      />
      <ProjectSectionHome
        image="bg-coding-challenge"
        title="30 Days Of Code "
        desc="A personal project I took up in which I coded 30 interactive
        components using HTML, CSS and Jquery."
      />

      <ProjectSectionHome
        image="bg-behance"
        title="Behance Search Experience Redesign  "
        desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics. 
        Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
      />
    </div>
  );
};

export default LandingPage;
