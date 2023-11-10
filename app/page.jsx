"use client"

import React from "react";

// import ProjectSectionHome from "../components/project-section-home";
import ProjectSectionHome from "./components/project-section-home"
import IntroText from "./components/project-section-home/project-section-home-components/introText";
import Layout from "./components/layout/Layout";
import { Image } from "@nextui-org/react";
import Header from './components/header';
import Footer from './components/footer';
import "./scroll.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


const Index = (props) => {

  return (
    <>
      <Header selectedPage={props.selectedPage} />

      <section className="w-10/12 max-w-7xl h-screen flex flex-row items-start justify-between pt-16 pb-12 md:pt-24 md:pb-56 md:pr-30 xl:pr-0 mx-auto snap-center">
        <IntroText
          className={"w-9/12"}
          textHeading={
            <h2>
              Nice to meet you! I'm Rishab👋. A product designer based in Bangalore
            </h2>
          }
        />

        <Image

          removeWrapper
          alt="Card background"
          className="w-64 bg-black object-cover rounded-full p-4"
          src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/landingPageRishab.gif"}
        />

      </section>

      <section className="w-full h-screen flex justify-center items-center bg-ibm-blue snap-center">
        <ProjectSectionHome
          className={""}
          title="Driving user experience modernization"
          role="Product designer | IBM"
          image="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"
          link="/ibm"
        />
      </section>

      <section className="w-full h-screen flex justify-center items-center bg-text-primary snap-center">

        <ProjectSectionHome
          title="Creating a user experience roadmap"
          role="Product designer | SD+"
          image="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplusTest.png"
          link="/sdplus"
        />
      </section>

      <section className=" flex flex-col w-full gap-10 py-10 md:mb-32 snap-center">
        <div className="w-full max-w-7xl mx-auto flex gap-10">
          <ProjectSectionHome
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral2.png"}
            destination="/chiral"
            title="Chiral Colonies - Climate change app | UX Case Study "
          // desc=" A mobile based game that aims to spread awareness on climate change, geared towards young adults.
          // Working towards a substainable future by changing human behaviour."
          />
          <ProjectSectionHome
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/CSS_Challenges_Portfolio.svg"}
            destination="/css-challenges"
            title="30 Days Of Code"
          // desc="A personal project I took up in which I coded 30 interactive
          // components using HTML, CSS and Jquery."
          />
        </div>
        <div className="w-full max-w-7xl mx-auto flex gap-10">
          <ProjectSectionHome
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance1.png"}
            destination="/behance"
            title="Behance Search Experience Re-design"
          // desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics.
          // Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
          />
          <ProjectSectionHome
            className={"opacity-0 pointer-events-none"}
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance1.png"}
            destination="/behance"
            title="Behance Search Experience Re-design"
          // desc="Evaluating the current search experience of Behance, through NN group's evaluation heuristics.
          // Completely redesigned the experience to conceive a faster, clearer and conclusive way of search. "
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;

{/* <Card className="w-6/12 sm:col-span-4 h-[700px]" isPressable onPress={() => router.push('/sdplus')}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start p-6 ">
              <p className="text-white/60 uppercase font-bold">Product designer | SD+</p>
              <h4 className="text-white text-left">Creating a user experience roadmap</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className={"z-0 w-full h-full object-cover"}
              src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplusTest.png"}
            />
          </Card> */}
{/* <Card className="w-6/12 sm:col-span-4 h-[700px]">
            <CardHeader className="absolute z-10 flex-col !items-start py-4 pl-4 pr-16">
              <p className="text-white/60 uppercase font-bold">SD+</p>
              <h4 className="text-white">Creating a user experience roadmap</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplus.png"}
            />
          </Card> */}

{/* <ProjectSectionHome
            className="group md:w-6/12 md:-mt-20"
            destination="/ibm"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"}
            // https://drive.google.com/file/d/1lwf-bGcHzZhj2k042SpaRTANszvPrBdB/view?usp=share_link
            title="Driving user experience modernization | IBM "
            hoverDesc=""
          // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
          // product, conducted user research, market analysis, created to-be
          // journey maps and designed prototypes for phased implementation."
          /> */}
{/* <ProjectSectionHome
            className="group md:w-4/12 md:mt-80 md:ml-auto"
            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplus.png"}
            destination="/sdplus"
            title="Creating a user experience roadmap | SD+"
          // desc="Ideated and designed a B2B product to simplify sustainability. Outlined the experience road map of the
          // product to identify parts of the product needing engagement and improved them, adopting an agile model."
          /> */}