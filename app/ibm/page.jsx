import React from "react";
import ProjectIntro from "../components/project-intro";
import ProjectSection from "../components/project-page-components/project-section/projectSection";
import ProjectSubDescContainer from "../components/project-page-components/sub-desc-container";
import ProjectSectionHome from "../components/project-section-home";
import Image from "../components/project-section-home/project-section-home-components/image";
import Description from "../components/project-section-home/project-section-home-components/description";
import Header from '../components/header';
import Layout from "../components/layout/Layout";


const IBM = (props) => {

    const miniDesc = {
        role: "Product designer",
        duration: "Jan 2021 - present",
        firm: "IBM Cloud and Cognitive",
        firstSegment: true,
        secondSegment: true
    };

    return (
        <>
            <Header />
            <Layout>


                <div
                    className=" transtion-opacity duration-300 ease-in"
                >
                    <div className="w-full flex flex-col items-center">
                        <ProjectIntro
                            title="Driving product modernization | IBM "
                            subTitle="Driving experience modernization"
                            miniDesc={miniDesc}
                            image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm(hero-image)(75).png"}
                        />

                        <ProjectSubDescContainer sectionTitle="Context">
                            <ProjectSection
                                color="text-ibm-blue"
                                heading="What is IBM MaaS360?"
                                desc={
                                    <span>
                                        <p>
                                            MaaS360 is IBM's enterprise solution that aids organizations
                                            in securing smartphones, tablets, laptops and the internet of
                                            things. It helps them keep their devices and data secure.
                                        </p>
                                        <br />

                                        {/* <br />
                <p>
                  I led the efforts to prioritize developement and deployment of
                  MaaS360 modernised self service portal created as part of the
                  internship
                </p> */}
                                    </span>
                                }
                            />

                            <ProjectSection
                                color="text-ibm-blue"
                                heading="Projects I worked on"
                                desc={
                                    <span>
                                        <p>
                                            {/* MaaS360 is undergoing extensive modernisations which opens up
                    oppurtunites for designers to craft new and improved
                    workflows. */}
                                            Over 1 year, I worked on 2 projects in
                                            collaboration with the design team, product managers, developers and
                                            director.
                                        </p>
                                        <br />
                                        <ul className="list-disc list-inside ml-8">
                                            <li>
                                                Led design efforts to modernize the self service portal
                                                for MaaS360 end-users which hadn't been updated for long.
                                                This required fresh and&nbsp;
                                                <span className="font-avenir-bold">
                                                    extensive research for identifying end-user's needs and
                                                    problems.
                                                </span>
                                                {/* and
                      prioritizing its development;.  */}
                                            </li>
                                            <br />
                                            <li>
                                                Revamping the security admin's portal dashboard for MaaS360. The goal here
                                                was to&nbsp;
                                                <span className="font-avenir-bold">
                                                    provide admins with a deployment overview, reduce navigation
                                                    time and align it with the product's strategic direction.
                                                </span>
                                            </li>
                                            {/* 
                   Throughout the project, I had
                  multiple calls with stakeholders discussing the portal's
                  prospects; which made them interested in prioritizing its
                  development and rollout.
  
                  Followed the design thinking process to
                  create a solution that aimed at meeting both user and business
                  goals.  */}
                                        </ul>
                                    </span>
                                }
                            />
                        </ProjectSubDescContainer>

                        <ProjectSubDescContainer sectionTitle="Where next?">
                            <div className="flex flex-col md:flex-row md:gap-16 mt-8">
                                <ProjectSectionHome
                                    className="group w-12/12 md:w-4/12"
                                    destination="/ibm/self-service-portal"
                                    image={

                                        "https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/project-preview-images/Frame_1.png"
                                    }
                                    title={
                                        <span>
                                            <p className="text-text-primary">Self Service Portal</p>
                                            <p className="label text-text-helper">Jan - July 2021 . 6 mos</p>
                                        </span>
                                    }
                                    hoverDesc=""
                                // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
                                // product, conducted user research, market analysis, created to-be
                                // journey maps and designed prototypes for phased implementation."
                                />
                                <ProjectSectionHome
                                    className="group w-12/12 md:w-4/12"
                                    destination="/ibm/homepage-dashboard"
                                    image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm/project-preview-images/Group_70.png"
                                    }
                                    title={
                                        <span>
                                            <p className="text-text-primary">Admin Portal Dashboard</p>

                                            <p className=" label text-text-helper">
                                                Jun 2021 - Jan 2022 . 6 mos
                                            </p>
                                        </span>
                                    }
                                    hoverDesc=""
                                // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
                                // product, conducted user research, market analysis, created to-be
                                // journey maps and designed prototypes for phased implementation."
                                />


                                {/* <ProjectSectionHome
                className="group md:w-4/12"
                destination="/ibm"
                image={
                 
                }
                title={
                  <p className="font-avenir-book">
                    Homepage dashboard <br />
                    (Coming Soon) <br />
                    <p className="text-sm text-gray50">
                      July 2021 - Jan 2022 . 6 mos
                    </p>
                  </p>
                }
  
                // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
                // product, conducted user research, market analysis, created to-be
                // journey maps and designed prototypes for phased implementation."
              /> */}
                            </div>
                        </ProjectSubDescContainer>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default IBM;
