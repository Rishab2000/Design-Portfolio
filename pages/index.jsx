import React from "react";

import ProjectSectionHome from "../components/project-section-home";
import IntroText from "../components/project-section-home/project-section-home-components/introText";
import Layout from "../components/layout/Layout";


const Index = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <Layout selectedPage='work'>
      <div
        className={LandingPageState + " transtion-opacity duration-300 ease-in"}
      >
        <IntroText
          className={" transtion-opacity duration-300 ease-in"}
          textHeading={
            <h2>
              Nice to meet you! I'm Rishab👋. Currently a UX designer at IBM.
            </h2>
          }
          caption={
            <span>
              Passionate about creating meaningful and efficient digital experiences.
            </span>
          }
        />
        <div className="flex flex-col items-center md:flex-row md:mb-32 ">
          <ProjectSectionHome
            className="group md:w-6/12 md:-mt-20"
            destination="/ibm"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"}
            // https://drive.google.com/file/d/1lwf-bGcHzZhj2k042SpaRTANszvPrBdB/view?usp=share_link
            title="Driving user experience modernization | IBM "
            hoverDesc=""
          // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
          // product, conducted user research, market analysis, created to-be
          // journey maps and designed prototypes for phased implementation."
          />
          <ProjectSectionHome
            className="group md:w-4/12 md:mt-80 md:ml-auto"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplus.png"}
            destination="/sdplus"
            title="Creating a user experience roadmap | SD+"
          // desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the
          // product to identify parts of the product needing engagement and improved them, adopting an agile model."
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:mb-32">
          <ProjectSectionHome
            className=" group md:w-11/12 md:mx-auto"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral2.png"}
            destination="/chiral"
            title="Chiral Colonies - Climate change app | UX Case Study "
          // desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults.
          // Working towards a substainable future by changing human behaviour."
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:w-12/12 md:mb-32 ">
          <ProjectSectionHome
            className="group w-full md:w-5/12 "
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/CSS_Challenges_Portfolio.svg"}
            destination="/css-challenges"
            title="30 Days Of Code"
          // desc="A personal project I took up in which I coded 30 interactive
          // components using HTML, CSS and Jquery."
          />

          <ProjectSectionHome
            className="group md:w-5/12 md:ml-auto"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance1.png"}
            destination="/behance"
            title="Behance Search Experience Re-design"
          // desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics.
          // Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;