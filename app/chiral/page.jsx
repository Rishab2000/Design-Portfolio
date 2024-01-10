import React from "react";
import ProjectIntro from '../components/project-intro';
import ProjectSection from '../components/project-page-components/project-section/projectSection';
import ProjectSubDescContainer from '../components/project-page-components/sub-desc-container';
import Header from "../components/header";
import Layout from '../components/layout/Layout';
import { Image } from "@nextui-org/react";

const Chiral = () => {
    const miniDesc = {
        duration: "Duration: 3 months, Apr - Jun 2020",
    };

    return (
        <div  className="w-11/12 lg:w-11/12 xl:w-10/12 max-w-8xl h-full flex flex-col gap-16 pt-4 pb-32 mx-auto homepage-intro">
            <Header />
            <Layout>
                <div className="w-full flex flex-col items-center">
                    <ProjectIntro
                        title="Chiral Colonies -
        Climate Change App | UX Case Study "
                        miniDesc={miniDesc}
                        image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral2.png"}
                    />

                    <ProjectSubDescContainer sectionTitle="Introduction">
                        <p className="font-avenir-book text-base lg:text-xl mt-2 mb-8">
                            Chiral colonies is a mobile-based game that aims to spread awareness
                            about climate change & also help make a positive impact. <br /> <br />
                            I worked on this project for around four weeks and followed the
                            process of understanding the context, empathizing with the target
                            audience, ideating, prototyping & testing with target audience. Here&apos;s
                            what happened
                        </p>
                    </ProjectSubDescContainer>
                    <div className="bg-blue-sdplus w-screen py-6 mb-8">
                        <div className="w-10/12 max-w-7xl mx-auto text-white font-avenir-bold text-xs lg:text-base flex ">
                            <div className="flex flex-col items-center justify-center  p-4">
                                <Image
                                    removeWrapper
                                    src="
                                    https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/discover.png"
                                    alt="Investigating emoji 🧐"
                                    className="w-12/12 lg:w-7/12 mx-auto"
                                />
                                <p className="mt-2">Discover</p>
                            </div>
                            <div className="flex flex-col items-center justify-center  p-4">
                                <Image
                                    removeWrapper
                                    src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/empathize.png"
                                    alt="Heart emoji ❤️"
                                    className="w-11/12 lg:w-7/12 mx-auto"
                                />
                                <p className="mt-2">Empathize</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/ideate.png"

                                    alt="Thinking emoji 🤔"
                                    className="w-12/12 lg:w-7/12 mx-auto"
                                />
                                <p className="mt-2">Ideate</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/prototype.png"
                                    alt="Big boi on laptop 🧑‍💻"
                                    className="w-12/12 lg:w-7/12 mx-auto"
                                />
                                <p className="mt-2">Prototype</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/testing.png"
                                    alt="Smart boi doing science 🧑‍🔬"
                                    className="w-12/12 lg:w-7/12 mx-auto"
                                />
                                <p className="mt-2">Testing</p>
                            </div>
                        </div>
                    </div>
                    <ProjectSubDescContainer sectionTitle="Process">
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Discovery Phase"
                            desc="I conducted secondary research to understand the context of climate
             change and different aspects of it"
                        />
                        <Image
                            removeWrapper
                            src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Discovery.png"
                            alt="Board of sticky notes displaying connection between data points"
                            className="w-12/12 my-12 lg:-mt-4 lg:mb-24"
                        />

                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Key questions I asked"
                            desc="I understood that the core problem to look at is the lack of sustainable co-existence
             between humans and nature. nature includes all plants, animals and micro-organisms"
                        />
                        <Image
                            removeWrapper
                            src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/questions.png"
                            alt="Board of sticky notes displaying connection between data points"
                            className="w-12/12 my-12 lg:-mt-4 lg:mb-24 "
                        />
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Key discovery"
                            desc="I learnt that plankton is one of the most important organisms for oxygen production by
             contributing to 50% of the world's oxygen production & compose only ~1% of the global
            biomass. "
                        />
                        <div className="flex flex-row flex-wrap gap-8 font-avenir-book text-xs lg:text-sm mt-6 lg:-mt-4 mb-12 lg:mb-24">
                            <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow justify-center items-center gap-12 py-5">
                                <Image
                                    removeWrapper
                                    src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/tree.svg"

                                    alt="tree illustration"
                                    className="w-1/12 lg:w-2/12"
                                />
                                <p className="w-5/12">
                                    75,000,000 colonies of Phytoplankton (2.5 metres approx) is equal
                                    to one tree
                                </p>
                            </div>
                            <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow justify-center items-center   gap-12 py-5">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/oxygen.svg"

                                    alt="tree illustration"
                                    className="w-1/12 lg:w-2/12"
                                />
                                <p className="w-5/12">
                                    Phytoplankton have a faster turn over rate than compared to trees
                                </p>
                            </div>
                            <div className=" w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow justify-center items-center  gap-12 py-5">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/ocean.svg"

                                    alt="tree illustration"
                                    className="w-1/12 lg:w-2/12"
                                />
                                <p className="w-5/12">
                                    Acidification of oceans affecting Phytoplanktons on a global scale
                                </p>
                            </div>
                            <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow justify-center items-center  gap-12 py-5">
                                <Image
                                    removeWrapper
                                    src=
                                    "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/temperature-01.svg"
                                    alt="tree illustration"
                                    className="w-1/12 lg:w-2/12"
                                />
                                <p className="w-5/12">
                                    Increase in temperature resulting in the reduction of available
                                    nutrients
                                </p>
                            </div>
                        </div>
                        {/* ADD THE STUPID LITTLE CARDS THAT I DECIDED TO MAKE....UGHHH WHY DO I HAVE TO MAKE MY LIFE THIS DIFFICULT */}
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Empathizing with the target users"
                            desc="After researching, I decided my user group to be young adults (18 to 25 years). 
            Consequently, I went on to understand more about my users to finally build a persona."
                        />
                        <Image
                            removeWrapper
                            src=
                            "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/User_persona.png"

                            alt="Created user persona "
                            className="w-12/12 mt-2 mb-12 lg:-mt-4 lg:mb-24"
                        />
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Ideating"
                            desc={
                                <span>
                                    <p>
                                        After several rounds of brainstorming, I finalized the concept
                                        of a a mobile game which was build by following two main
                                        guidelines:
                                    </p>
                                    <ul className="list-disc list-inside font-avenir-book mt-2 mb-2">
                                        <li>
                                            Raising awareness about phytoplanktons because of the positive
                                            effect they have on the climate
                                        </li>
                                        <li>
                                            Young adults care more about the environment than money and
                                            that they would gravitate towards a firm that behaves
                                            sustainably and works toward it
                                        </li>
                                    </ul>
                                </span>
                            }
                        />
                        <Image
                            removeWrapper
                            src=
                            "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/chiral_colonies.jpg"
                            alt="Created user persona "
                            // add whatever this user flow means
                            className="w-12/12 mt-2 mb-12 lg:-mt-4 lg:mb-24 lg:w-5/12 mx-auto"
                        />
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Designing user flows"
                            desc="Based on my idea, I worked out the information architecture 
            for the game and subsequently detailed out different user flows"
                        />
                        <div className="flex flex-wrap gap-8 mt-2 mb-12 lg:-mt-4 lg:mb-24">
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/User_flow/User_Flow.png"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-12/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/User_flow/User_Flow2.png"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-12/12"
                            />
                        </div>
                    </ProjectSubDescContainer>

                    <ProjectSubDescContainer sectionTitle="Outcome">
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Prototyping"
                            desc="After planning out the user flows, I decided 
          to wireframe the 2nd user flow as it delves into the details of the app"
                        />
                        <div className="flex flex-wrap gap-8 mt-2 mb-12 lg:-mt-4 lg:mb-24 justify-between ">
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes-01.png"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-12/12 my-3 lg:my-0 lg:w-6/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes-02.png"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-12/12 my-3 lg:my-0 lg:w-5/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes-03.png"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-12/12 my-3 lg:my-0 lg:w-5/12 lg:mx-auto"
                            />
                        </div>
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="Digital prototypes"
                            desc="I tweaked the design a bit before proceeding to
          digital prototypes, where I finalized on the core of the functionality
          and working of the app"
                        />
                        <div className="flex flex-wrap mt-2 mb-12 lg:-mt-4 lg:mb-24 gap-8 justify-between ">
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/1.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/2.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />

                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/4.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            {/* <img
              src={
                process.env.PUBLIC_URL + "/images/chiral-project/Wireframes/5.jpg"
              }
              alt="Created user persona "
              // add whatever this user flow means
              className="w-3/12 my-3 lg:my-0 lg:w-2/12"
            />
            <img
              src={
                process.env.PUBLIC_URL + "/images/chiral-project/Wireframes/6.jpg"
              }
              alt="Created user persona "
              // add whatever this user flow means
              className="w-3/12 my-3 lg:my-0 lg:w-2/12"
            /> */}
                            <Image
                                removeWrapper
                                src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/7.jpg"

                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/8.jpg"

                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com//chiral-project/Wireframes/9.jpg"

                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-3/12 my-3 lg:my-0 lg:w-2/12"
                            />
                        </div>
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="User testing wireframes"
                            desc="While testing the main feedback I received was the lack of cohesion on
            the main page, it was hard for the user to understand what to do. "
                        />
                        <Image
                            removeWrapper
                            src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/Wireframes/10.jpg"
                            alt="Created user persona "
                            // add whatever this user flow means
                            className="w-12/12  mt-2 mb-12 lg:-mt-4 lg:mb-24  lg:my-0 lg:w-6/12 mx-auto"
                        />
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="High fidelity prototypes"
                            desc="It was time to bring some colour and typography into the design. I choose
            a colour palette on the cooler side to induce a serene and more natural atmosphere 
            in the app. "
                        />
                        <div className="flex flex-wrap gap-4  mt-2 mb-12 lg:-mt-4 lg:mb-24 lg:gap-8 justify-between ">
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/high_fidelity/plankton-02.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-5/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=

                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/high_fidelity/plankton-09.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-5/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/high_fidelity/plankton-03.jpg"

                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-5/12 my-3 lg:my-0 lg:w-2/12"
                            />
                            <Image
                                removeWrapper
                                src=
                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/chiral-project/high_fidelity/plankton-04.jpg"
                                alt="Created user persona "
                                // add whatever this user flow means
                                className="w-5/12 my-3 lg:my-0 lg:w-2/12"
                            />
                        </div>
                    </ProjectSubDescContainer>
                    <ProjectSubDescContainer sectionTitle="Result">
                        <ProjectSection
                            color="text-blue-chiral"
                            heading="User testing and next steps forward"
                            desc={
                                <p>
                                    Once I had my final screens. I conducted another round of
                                    usability testing with 5 users. During the test, I received
                                    positive feedback about the usability of the app. However, 2/5
                                    people weren&apos;t convinced to use the app on a daily basis, which I
                                    did not expect at all. <br />
                                    <br /> While in search for a feasible solution. The next step with
                                    this is to bring a sense of ownership to the user, make they feel
                                    that they are part of a larger community and that they are, in
                                    effect, contributing.
                                </p>
                            }
                        />
                    </ProjectSubDescContainer>
                </div>
            </Layout>
        </div>
    );
};


export default Chiral;