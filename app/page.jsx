"use client"

import React, { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import ProjectSectionHome from "./components/project-section-home";
import FeaturedProject from "./components/project-section-home/featured-project";
import IntroText from "./components/project-section-home/project-section-home-components/introText";
import Layout from "./components/layout/Layout";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Image, Button } from "@nextui-org/react";
import Header from './components/header';
import Footer from './components/footer';
import "./scroll.css";
import "./carousel.css";




const Index = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [WheelGesturesPlugin()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    < div >
      <Header selectedPage={props.selectedPage} />

      <section className="w-10/12 max-w-7xl h-full flex flex-col gap-10 pt-16 pb-16 mx-auto homepage-intro">
        <div className=" flex flex-row items-start justify-between">
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
        </div>
        <div className="embla w-8/12 relative" ref={emblaRef} >
          <div className="embla__container relative">
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/15.webp" className=" h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/1.webp" className=" h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/27.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/35.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/30.webp" className="h-[500px]" /></div>
            {/* <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/36.webp" className="h-[500px]" /></div> */}
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/41.webp" className="h-[500px]" /></div>
            {/* <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/42.webp" className="h-[500px]" /></div> */}
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/43.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/49.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/45.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/50.webp" className="h-[500px]" /></div>
            <div className="embla__slide"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/8.webp" className="h-[500px]" /></div>
            <div className="embla__slide pr-4"><Image src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/homepage-photos/16.webp" className="h-[500px]" /></div>
          </div>
          <Button isIconOnly onPress={scrollPrev} className="embla__prev absolute top-1/2 left-6 z-10 bg-white/30 shadow-lg"><ArrowBack /></Button>
          <Button isIconOnly onPress={scrollNext} className="embla__next absolute top-1/2 right-6 z-10 bg-white/30 shadow-lg"><ArrowForward /></Button>
        </div>
      </section>

      <FeaturedProject
        backgroundColour="bg-ibm-blue"
        imageSrc="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"
        title="Driving user experience modernization"
        destination="/ibm"
      />
      <FeaturedProject
        backgroundColour="bg-sd-plus-green"
        imageSrc="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplusTest.png"
        title="Creating a user experience roadmap"
        destination="/sdplus"
      />

      {/* <section className="w-full h-screen flex justify-center items-center bg-text-primary snap-center relative">
        <div className="imageContainer w-6/12 h-[700px] top-10">
          <ProjectSectionHome
            className={"image w-full 6"}
            // title="Driving user experience modernization"
            // role="Product designer | IBM"
            image="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/sdplusTest.png"
            link="/sdplus"
          />
        </div>
        <motion.h2 className="absolute pb-64 text-white" style={{ y, x: 500 }}>Creating a user experience roadmap</motion.h2>

      </section> */}

      <section className=" flex flex-col w-full gap-10 py-10 md:mb-32 featured-section">
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
        <Footer />
      </section>

    </div>
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