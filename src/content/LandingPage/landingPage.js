import React from "react";
// import { Link } from "react-router-dom";
import ProjectSectionHome from "../../components/project-section-home";

const LandingPage = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <div className={LandingPageState + " mt-52 transtion-opacity duration-300 ease-in"}>
      <div className= " lg:flex lg:mb-32 ">
        <ProjectSectionHome
          className="group lg:w-6/12 "
          image={process.env.PUBLIC_URL + "/images/ibm.png"}
          title="IBM Cloud and Cognitive | UX Design Internship"
          hoverDesc=""
          // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
          // product, conducted user research, market analysis, created to-be
          // journey maps and designed prototypes for phased implementation."
        />
        <ProjectSectionHome
          image={process.env.PUBLIC_URL + "/images/sdplus.png"}
          className="group lg:w-4/12 mt-44 lg:ml-auto"
          title="SD+ | UX Design Internship"
          // desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the
          // product to identify parts of the product needing engagement and improved them, adopting an agile model."
        />
      </div>
      <div className="lg:w-12/12 lg:mb-32">
        <ProjectSectionHome
          className=" group lg:w-11/12 mx-auto"
          image={process.env.PUBLIC_URL + "/images/chiral2.png"}
          title="Chiral Colonies - Climate change app | UX Case study "
          // desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults.
          // Working towards a substainable future by changing human behaviour."
        />
      </div>
      <div className="flex lg:w-12/12 lg:mb-32 ">
        <ProjectSectionHome
          className="group lg:w-5/12 "
          image={
            process.env.PUBLIC_URL + "/images/CSS_Challenges_Portfolio.svg"
          }
          title="30 Days Of Code"
          // desc="A personal project I took up in which I coded 30 interactive
          // components using HTML, CSS and Jquery."
        />

        <ProjectSectionHome
          className="group lg:w-5/12 lg:ml-auto"
          image={process.env.PUBLIC_URL + "/images/behance1.png"}
          title="Behance Search Experience Redesign"
          // desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics.
          // Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
        />
      </div>
    </div>
  );
};

export default LandingPage;
