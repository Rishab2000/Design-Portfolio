"use client"

import React, {useCallback} from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/project-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";
import ProjectSectionHome from "../../components/project-section-home";
import Layout from "../../components/layout/Layout";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    Divider
} from "@nextui-org/react";

// Carasousel
import useEmblaCarousel from 'embla-carousel-react';
import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures';
import EmblaCarousel from "./Carasoul/goals"

import "./style.css"
import "./carousel.css";

const HomepageDashboard = (props) => {
    const OPTIONS = {
        align: 'start'
    }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const miniDesc = {
        role: "Role: UX design intern",
        duration: "Duration: 1 Year, July 2021 - July 2021",
        firm: "Company: IBM Indian Software Labs, MaaS360"
    };

    const goalCard = {
        width: "w-[350px]",
        height: "h-[350px]",
        bg: "bg-[#f4f4f4]"

    }
    // const LandingPageState = props.hidden ? "opacity-0" : " ";
    return (
        <Layout>
            <div className="w-full flex flex-col items-center">
                <ProjectIntro
                    title="Modernizing MaaS360's dashboard"
                    subTitle="Completely rethinking and redesigning both UI and UX"
                    miniDesc={miniDesc}
                    image="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/project-preview-images/cover_image_lg_HomepageDashboard.png"/>

                <ProjectSubDescContainer sectionTitle="Context">

                    <ProjectSection className="mt-[64px]">
                        <p className="paragraph mb-[40px] text-text-primary">
                            This project involves defining of modernisation, creating foundations of the new
                            homepage, phase 1 designs for productisation and a lot of stakeholder
                            management.
                        </p>
                        <p className="body-1 text-text-secondary ">
                            Starting as an internship project, the only requirement given to me was to be ✨
                            modernized ✨. I worked alongside my mentor and later independently drove this
                            project to design a homepage aimed at improving our users' productivity and
                            efficiency.
                        </p>
                    </ProjectSection>
                </ProjectSubDescContainer>

                <Divider className="my-8"/>
                <ProjectSubDescContainer sectionTitle="Building the foundation">
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Short-term acheivable goals. Getting started and building momentum"
                        className="relative mb-[40px] mt-[64px] ">
                        <p className="body-1">
                            It was quickly evident that getting this large scale project started the right
                            way was essential for it to move in a meaningful direction. For that, there were
                            two main things that required crystalisation.
                            <br/><br/><br/>
                            <span>
                                <h4>Purpose</h4>
                                <p className="mb-2">With the absence of a PRD; there was
                                    no clear reasoning as to why the homepage required a refresh or the direction
                                    the refresh requried to take.
                                </p>

                                <h2 className="text-text-placeholder opacity-20">and</h2>

                                <h4 className="mt-4">Support</h4>
                                <p>Sentiment from the stakholders was that this is just an internship project.
                                    Not something serious</p>
                            </span>
                        </p>
                    </ProjectSection>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>

                    <ProjectSection
                        customStyleSpacing="mt-[160px]"
                        heading="Identifying problems to solve (Oppurtunities)">
                        <span >
                            <p className="body-1">
                                Homepage is the first screen users land after each log in. It serves as a
                                starting point, it should help IT admins easily get started with their day. This
                                simple understanding helped provde direction for our research. Focus on
                                understanding frictions IT admins face as they get their day started with the
                                product.
                            </p>
                            <br/>
                            <p className="body-1">Since it was difficult to get in through with enterprise
                                customer at the moment, I had to make do with resources I had accessible:
                            </p>
                            <ul className="body-1 list-disc list-inside">
                                <li className="body-1">
                                    NPS (Net promotor score) surveys for the past 3 years
                                </li>
                                <li className="body-1">
                                    Online IBM community for MaaS360. A stackoverflow for MaaS360
                                </li>
                                <li>
                                    Customer support staff. Continously help resolve issues small to mid sized
                                    customers.
                                </li>
                                <li>
                                    Lab advocates. Senior IBM Executives and Senior Technical Leaders from the
                                    product team remain in close contact with large customers identify areas for
                                    ongoing business partnerships.
                                </li>
                            </ul>
                        </span>
                    </ProjectSection>

                    <ProjectSection heading="Areas of oppurtunity">
                        <div className="flex row gap-8">
                            <Card className="w-5/12 h-[400px]">
                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                    <p className="text-tiny uppercase font-bold text-text-placeholder">Summarised system status</p>
                                    <h4>Summarised system status</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/homepage/holistic.png"/>
                            </Card>
                            <Card className="w-5/12 h-[400px]">
                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                    <p className="text-tiny  uppercase font-bold text-text-placeholder">Provide summarised system status</p>
                                    <h4>Simply navigation</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/homepage/navigation.png"/>
                            </Card>

                        </div>
                    </ProjectSection>
                    <ProjectSection heading="Gaining stakeholder support">
                        <p className="body-1">
                            Early on I learnt that, this project will not move forward if all the
                            stakeholders involved do not support it. I could create an amazing design, but
                            if the director Vetos it customers are never going to benefit from it. Since,
                            creating the best possible case for our users, it was my repoinsiblity to get
                            everyone excited and on board this project. My approach for this was help them
                            understand the problem we're solving in a way that makes sense to them.
                        </p>
                        <br/>
                        <h4>I aimed at tackling this by putting it across throught the single lens of
                            business benefits of modernizing the homepage.
                        </h4>
                    </ProjectSection>
                </ProjectSubDescContainer>
                <Divider className="my-8"/>
                <ProjectSubDescContainer sectionTitle="Milestone party!">
                    <ProjectSection className="mt-[64px]">
                        <p className="body-1">
                            To my surprise, everyone loved it. This project received executive support all
                            the way from the director. With the gears set in motion we aimed at
                            brainstorming on how best we can make use of the oppurtunity spaces that we
                            identified.
                            <br/>
                            To ensure we don't de-rail during this long (and I mean VERY LONG) ideation
                            phase, we had to set some gaurd rails. Some design principles all of us agreed
                            that homepage should abide to.
                            <br/>
                            After quite some back and forth, I was able to nail down on three main
                            principle:
                        </p>
                        <ul className="body-1">
                            <li className="body-1">Always provide a birds eye view</li>
                            <li className="body-1">Built for the user, by the user</li>
                            <li className="body-1">Ability to Quickly attack workflows</li>
                        </ul>

                    </ProjectSection>

                </ProjectSubDescContainer >
                <Divider className="my-8"/>
                <ProjectSubDescContainer sectionTitle="Getting our hands dirty">
                    <ProjectSection heading="Iterate iterate iterate">
                        <p>Full documentations</p>
                    </ProjectSection>
                    <ProjectSection heading="Wholistic view">
                        <p>Full documentations</p>
                    </ProjectSection>
                    <ProjectSection heading="Navigation">
                        <p>Full documentations</p>
                    </ProjectSection>
                    <ProjectSection heading="Empowering users">
                        <p>Full documentations</p>
                    </ProjectSection>

                    <ProjectSection heading="Future plans">
                        <p>Full documentations</p>
                    </ProjectSection>
                </ProjectSubDescContainer>
                <Divider className="my-8"/>
                <ProjectSubDescContainer sectionTitle="Learnings">
                    <ProjectSection>
                        <p>Full documentations</p>
                    </ProjectSection>
                </ProjectSubDescContainer>
            </div >
        </Layout >
    );
};

export default HomepageDashboard;
