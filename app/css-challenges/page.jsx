import React from "react";
import ProjectIntro from "../components/project-intro";
import NormalContainer from "../components/css-challenge/normal-container";
import ProjectSubDescContainer from "../components/project-page-components/sub-desc-container";
import MasterContainer from "../components/css-challenge/master-container";
import Layout from "../components/layout/Layout";
import Header from "../components/header";

const CssChallenges = () => {
    const miniDesc = {
        duration: "Duration: 30 exciting days",
    };
    return (
        <div className="w-11/12 lg:w-11/12 xl:w-10/12 max-w-8xl h-full flex flex-col gap-16 pt-4 pb-32 mx-auto homepage-intro">
            <Header />
            <Layout>
                <div className="w-full flex flex-col items-center">
                    <ProjectIntro
                        title="30 days of code "
                        miniDesc={miniDesc}
                        imageHeight=""
                        image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/CSS_Challenges_Portfolio.png"}
                    />
                    {/* <div className="w-screen bg-background-CSS py-12"> */}
                    <MasterContainer>

                        <NormalContainer
                            containerClass="flex-row items-center"
                            challenge="Challenge_004"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 03"
                            title="Loading animation"
                            desc="On clicking the button, a loading animation starts and alerts 
                                 when completed."
                        />

                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row-reverse items-center "
                            challenge="Challenge_009"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 09 "
                            title="Weather Widget"
                            desc="A compact widget displaying the weather stats and also a 
                                 visual related to it (not live)."
                        />
                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row items-center"
                            challenge="Challenge_015"
                            windowClass="w-80 h-110 lg:w-[42rem] lg:h-[42rem]"
                            desClass="lg:ml-28 mb-12 w-60"
                            day="Day 15"
                            title="Pricing System"
                            desc="On hovering over each card, the features of that subscription
                                      are shown below."
                        />
                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row-reverse items-center"
                            challenge="Challenge_018"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 18 "
                            title="Record Button"
                            desc="On clicking the button, an animation indicating that the 
                                 device is recording is shown."
                        />
                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row items-center"
                            challenge="Challenge_020"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 20 "
                            title="Carousel"
                            desc="An infinite carousel which cycles through different 
                                words to form a sentence."
                        />
                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row-reverse items-center"
                            challenge="Challenge_027"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 27"
                            title="Animation experiment"
                            desc="An experiment to gauge the extent of my knowledge 
                                 about CSS animation. Click the circle to view the result 😛."
                        />
                    </MasterContainer>

                    <MasterContainer>
                        <NormalContainer
                            containerClass="flex-row items-center"
                            challenge="Challenge_030"
                            windowClass="lg:w-[28.1rem] lg:h-[28.1rem]"
                            desClass="w-60"
                            day="Day 30 "
                            title="Toggle button"
                            desc="The simple toggle button made gripping with a 
                                 simple animation when clicked on."
                        />
                    </MasterContainer>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </Layout >
        </div >
    );
};

export default CssChallenges;
