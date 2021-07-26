import React from "react";
import ProjectSectionHome from "../../components/project-section-home";
import ibm from "../../img/IBM.png"
import sdplus from "../../img/sdplus_mockup1.png"
import chiral from "../../img/chiral2.png"
import codingChallenges from "../../img/CSS_Challenges_Portfolio.svg"
import behance from "../../img/behance1.png"

const LandingPage = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <div
      className={
        LandingPageState +
        " z-20 flex flex-col items-center lg:items-start transtion-opacity duration-300 ease-in "
      }
    >
      <ProjectSectionHome
        className="lg:ml-auto lg:w-6/12 "
        image={ibm}
        title="IBM Cloud and Cognitive | UX Design Internship"
        desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
        product, conducted user research, market analysis, created to-be 
        journey maps and designed prototypes for phased implementation."
      />
      <ProjectSectionHome
        image={sdplus}
        className="lg:ml-6 lg:-mt-96 lg:w-4/12 "
        title="SD+ | UX Design Internship"
        desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the 
        product to identify parts of the product needing engagement and improved them, adopting an agile model."
      />
      <ProjectSectionHome
        image={chiral}
        title="Chiral Colonies - Climate change app | UX Case study "
        desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults. 
        Working towards a substainable future by changing human behaviour."
      />
      <ProjectSectionHome
        image={codingChallenges}
        title="30 Days Of Code"
        desc="A personal project I took up in which I coded 30 interactive
        components using HTML, CSS and Jquery."
      />

      <ProjectSectionHome
        image={behance}
        title="Behance Search Experience Redesign"
        desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics. 
        Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
      />
    </div>
  );
};

export default LandingPage;
