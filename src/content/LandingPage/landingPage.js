import React from "react";
// import { Link } from "react-router-dom";
import ProjectSectionHome from "../../components/project-section-home";
import IntroText from "../../components/project-section-home/project-section-home-components/introText";

const LandingPage = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <div
      className={LandingPageState + " transtion-opacity duration-300 ease-in"}
    >
      <IntroText
        className={" transtion-opacity duration-300 ease-in"}
        textHeading={
          <span>
            Hey there! I'm Rishab👋. <br/>A UX designer from bangalore
          </span>
        }
        caption={
          <span>
            With a passion for simplifying complex systems into
            engaging human-centric experiences. Currently a UX Design intern{" "}
            <span className="font-avenir-bold"> @ IBM</span>.{" "}
          </span>
        }
      />
      <div className="flex flex-col items-center md:flex-row md:mb-32 ">
        <ProjectSectionHome
          className="group md:w-6/12 md:-mt-20"
          destination="/ibm"
          image={process.env.PUBLIC_URL + "/images/ibm.png"}
          title="IBM Cloud and Cognitive | UX Design Internship"
          hoverDesc=""
          // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
          // product, conducted user research, market analysis, created to-be
          // journey maps and designed prototypes for phased implementation."
        />
        <ProjectSectionHome
          className="group md:w-4/12 md:mt-80 md:ml-auto"
          image={process.env.PUBLIC_URL + "/images/sdplus.png"}
          destination="/sdplus"
          title="SD+ | UX Design Internship"
          // desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the
          // product to identify parts of the product needing engagement and improved them, adopting an agile model."
        />
      </div>
      <div className="flex flex-col items-center md:flex-row md:mb-32">
        <ProjectSectionHome
          className=" group md:w-11/12 md:mx-auto"
          image={process.env.PUBLIC_URL + "/images/chiral2.png"}
          destination="/chiral_colonies"
          title="Chiral Colonies - Climate change app | UX Case study "
          // desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults.
          // Working towards a substainable future by changing human behaviour."
        />
      </div>
      <div className="flex flex-col items-center md:flex-row md:w-12/12 md:mb-32 ">
        <ProjectSectionHome
          className="group w-full md:w-5/12 "
          image={
            process.env.PUBLIC_URL + "/images/CSS_Challenges_Portfolio.svg"
          }
          destination="/css_challenge"
          title="30 Days Of Code"
          // desc="A personal project I took up in which I coded 30 interactive
          // components using HTML, CSS and Jquery."
        />

        <ProjectSectionHome
          className="group md:w-5/12 md:ml-auto"
          image={process.env.PUBLIC_URL + "/images/behance1.png"}
          destination="/behance"
          title="Behance Search Experience Redesign"
          // desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics.
          // Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
        />
      </div>
    </div>
  );
};

export default LandingPage;
