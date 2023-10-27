"use client"

import React from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";
import { Tweet } from "react-twitter-widgets";
import Layout from "../../components/layout/Layout";

const SelfServicePortal = (props) => {
    const miniDesc = {
        // role: "Role: UX design intern",
        // duration: "Duration: 6 Months, Jan 2021 - Jun 2021",
        // firm: "Company: IBM Indian Software Labs, MaaS360",
    };
    // const LandingPageState = props.hidden ? "opacity-0" : " ";
    return (
        <Layout>
            <div className="w-full flex flex-col items-center">
                <ProjectIntro
                    title="Self Service Portal Re-design"
                    subTitle="Driving efforts for revamping the portal"
                    miniDesc={miniDesc}
                    image={
                        "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/project-preview-images/cover_image_lg.png"
                    }
                />

                <ProjectSubDescContainer sectionTitle="Context">
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="What is the Self Service Portal?"
                        desc={
                            <span>
                                <p>
                                    It empowers employees (end-users) to perform basic device
                                    management tasks, investigate and fix common issues. Ergo,
                                    reducing the number of IT support tickets. <br />
                                    {/* It provides employees with key MDM tools so that they can solve
                common issues without any IT involvement. */}
                                    {/* Self service portal is a service that can be enabled on
                MaaS360 Users can self manage their devices using the self service
                portal  */}</p>
                                <div className="flex flex-col md:w-10/12">
                                    <img
                                        src="https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/User map.png"
                                        alt="A GIF of a cute cat :)"
                                        className="w-full mt-8 mb-4 rounded-md filter drop-shadow-md"
                                    />
                                    {/* <span className=" text-gray40 text-sm mx-auto">
                    ~ Understanding the two users ~
                  </span> */}
                                </div>
                            </span>
                        }
                    />

                    {/* <ProjectSection
            color="text-blue-ibm"
            heading="My role throughout the project"
            desc={
              <span>
                I was the designer, along with my mentor, responsible for
                revamping the portal. <br /> <br /> Some of the responsibilities included exploratory research,
                ideation, UI design and strategy planning.
                {/* Was part of a team of 4 designers. */}

                    <ProjectSection
                        color="text-blue-ibm"
                        heading="My Project Deliverables"
                        desc={
                            <span>
                                <div className="flex flex-wrap text-center gap-2 mt-10 mb-24 gap-10">
                                    <div className="flex flex-col w-4/12 bg-cool-gray20 bg-opacity-40 rounded-md ">
                                        <img
                                            src={
                                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/icons/microscope.svg"
                                            }
                                            alt="A GIF of a cute cat :)"
                                            className="w-8/12 lg:w-4/12 mx-auto mb-4"
                                        />
                                        <p className="mt-2">
                                            UX secondary and primary research insights
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-4/12 bg-cool-gray20 rounded-md bg-opacity-40">
                                        <img
                                            src={
                                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/icons/choropleth-map.svg"
                                            }
                                            alt="A GIF of a cute cat :)"
                                            className="w-8/12 lg:w-4/12 mx-auto mb-4"
                                        />
                                        <p className="mt-2">User journey maps</p>
                                    </div>
                                    <div className="flex flex-col w-4/12 bg-cool-gray20 rounded-md bg-opacity-40">
                                        <img
                                            src={
                                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/icons/heat-map.svg"
                                            }
                                            alt="A GIF of a cute cat :)"
                                            className="w-8/12 lg:w-4/12 mx-auto mb-4"
                                        />
                                        <p className="mt-2">
                                            High fidelity mockups complying to&nbsp;
                                            <a
                                                href="https://www.carbondesignsystem.com/"
                                                className="underline hover:text-link-hover-color"
                                            >
                                                Carbon Design System
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-4/12 bg-cool-gray20 rounded-md bg-opacity-40">
                                        <img
                                            src={
                                                "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/icons/flow-logs-vpc.svg"
                                            }
                                            alt="A GIF of a cute cat :)"
                                            className="w-8/12 lg:w-4/12 mx-auto mb-4"
                                        />
                                        <p className="mt-2">Feature roadmap for phased development</p>
                                    </div>
                                </div>
                            </span>
                        }
                    />
                </ProjectSubDescContainer>

                <ProjectSubDescContainer sectionTitle="Design Process">
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Getting the ball moving"
                        desc={
                            <span>
                                <p>
                                    Conducted a cognitive walkthrough of the existing portal using
                                    IBM's design heuristics guidelines; also, carried out competitive
                                    analysis to understand the landscape for self service portals in
                                    this context.
                                    <br /> <br />
                                    Analysed business needs to gain clarity regarding the strategic
                                    direction the portal should move in.
                                    {/* would fit into the self
                service portal story */}
                                </p>
                            </span>
                        }
                    />
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Understanding User Needs"
                        desc={
                            <span>
                                <p>
                                    Here, we had to look into both end-user's and admin's POV, and
                                    understand the different goals of both end-users while using, and
                                    admins while activating the portal.
                                    {/* Understand the different goals end-users aim to achieve by logging in and reasons
                admins for activating the portal. */}
                                </p>
                                <br />
                                <br />
                            </span>
                        }
                    />
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="User Interviews"
                        desc={
                            <span>
                                <p>
                                    We were in continuous contact with users to facilitate
                                    co-creation. We received constant feedback on our hypotheses and
                                    ideas that we developed throughout the project.
                                    {/* This provided us insight on
                their needs that helped us decide and prioritize what's most
                important. */}

                                </p>
                                <br />
                                <br />
                                <div className="p-8 bg-ibm-blue rounded-md">
                                    <span >
                                        <p className="text-white text-center">
                                            Focusing on our users' needs made it easier for us to
                                            determine what's important. It helped make our offering more
                                            relevant and essential.
                                        </p>
                                    </span>
                                </div>
                                {/* <code className="bg-gray10 text-red p-2.5">
                  TALK ABOUT OUR ASSUPMTIONS AND HOW WE AIMED TO LEARM MORE AND
                  VALIDATE (see video on IBM design thinking)
                       Focusing our work around users and their needs, we were able
                    to more easily decide what’s important. This helped make our
                    offering more relevant and essential to our users.
                </code> */}
                            </span>

                        }
                    />
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Design directions"
                        desc={
                            <span>
                                <p>
                                    "Design directions” aimed to provide a glimpse of the portals
                                    different meaningful characteristics.
                                </p>
                                <br />
                                <br />
                                <p>
                                    To keep the teams aligned to generate meaningful user outcomes we
                                    generate a few&nbsp;
                                    <a
                                        href="https://www.ibm.com/design/thinking/page/framework/keys/hills"
                                        className="underline hover:text-link-hover-color"
                                    >
                                        hills.
                                    </a>
                                    &nbsp;They helped us stay aligned as to where to go, not exactly on how to get there.
                                </p>
                            </span>
                        }
                    />

                    <ProjectSection
                        color="text-blue-ibm"
                        heading="The Pretty Part Of It"
                        desc={
                            <span>
                                <p>
                                    {/* Two fonts walk into a bar, the bartender says “we don't serve your
                type here.” So they called the serif "click here to smile link"{" "}
                <br /> <br /> */}
                                    Throughout the "making" process to maintain a value-oriented
                                    approach rather than a feature-oriented one, we constantly asked
                                    ourselves:
                                </p>
                                <br />
                                <br />
                                <ul className="list-disc list-inside text-lg md:text-2xl">
                                    <li> Who are our users?</li>
                                    <li> What is their current experience?</li>
                                    <li> How can it be improved?</li>
                                </ul>
                            </span>
                        }
                    />

                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Restless Reinvention"
                        desc={
                            <span>
                                <p>
                                    Scheduled regular calls with multiple stakeholders to constantly
                                    iterate and improve. We cycled through multiple ideation and
                                    feedback rounds before solidifying on a shippable design.
                                </p>

                                <Tweet tweetId="1465437029391425538" options={{ width: "400" }} />
                            </span>
                        }
                    />

                    {/* <ProjectSection
            color="text-blue-ibm"
            heading="Phased implementation"
            desc={
              <span>
                Since the top management was interested in prioritizing implementation of the portal. To aid swift
                development, we decided on creating versions that required
                gradual changes on the backend.
              </span>
            }
          /> */}
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="The pinky promise"
                        customstyleSpacing="my-5"
                        desc={
                            <span className="flex md:flex-row flex-col mt-8">
                                <img
                                    src="https://media.giphy.com/media/hj8eOHrXqoLntsCyWz/giphy.gif"
                                    alt="A GIF of a cute cat :)"
                                    className="w-96 md:w-72 mx-auto my-4 lg:my-0"
                                />
                                <p className="md:ml-8 text-left">
                                    Since the nature of this project is confidential and I was not able to
                                    include any screenshots of the process or mockups 🥲
                                    <br />
                                    <br />
                                    NDAs will be the death of me
                                </p>

                                {/* <br />
              <p>
                I led the efforts to prioritize developement and deployment of
                MaaS360 modernised self service portal created as part of the
                internship
              </p> */}
                            </span>
                        }
                    />
                </ProjectSubDescContainer>
                <ProjectSubDescContainer sectionTitle="Key Learnings">
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Developing a T-shaped Skillset"
                        desc={
                            <span>
                                <p>
                                    Working alongside stakeholders like system architects, product
                                    managers, front-end developers and business leaders introduced me
                                    to diversify my knowledge into other areas such as business,
                                    industry and technical knowledge.
                                </p>
                            </span>
                        }
                    />
                    <ProjectSection
                        color="text-ibm-blue"
                        heading="Being Intentional"
                        desc={
                            <span>
                                <p>
                                    Learnt the importance of maintaining specific and clear goals for
                                    nearly everything, from reaching out to team members to managing
                                    time to making design decisions.
                                    {/* either by coming in with questions or asking for specific feedback on my work. */}
                                    {/* Much of what I learned came from collaborations.
                I’d spend meetings discussing interaction and visual decisions,
                weighing the pros and cons of UI explorations, and thinking
                through how users would perceive and process content at each
                interaction touchpoint. */}</p>
                            </span>
                        }
                    />
                    <ProjectSection
                        color="text-blue-ibm"
                        heading="Building Narratives"
                        desc={
                            <span>
                                <p>
                                    Building empathy through strong narratives. Having a good
                                    narrative while discussing with multiple stakeholders helped them
                                    easily understand why and what we were designing, and identifying
                                    with the users and their journey.
                                    {/* You then attempt to construct a believable narrative, whereby the user 
                tries to achieve their desired end state through the agency of your proposal */}
                                    {/* either by coming in with questions or asking for specific feedback on my work.  */}
                                    {/* Much of what I learned came from collaborations.
                I’d spend meetings discussing interaction and visual decisions,
                weighing the pros and cons of UI explorations, and thinking
                through how users would perceive and process content at each
                interaction touchpoint. */}</p>
                            </span>
                        }
                    />
                </ProjectSubDescContainer>
            </div>
        </Layout >
    );
};

export default SelfServicePortal;