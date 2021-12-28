import React from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";
import ProjectSectionHome from "../../components/project-section-home";

const IBM = (props) => {
  const LandingPageState = props.hidden ? "opacity-0" : " ";
  const miniDesc = {
    role: "Role: UX design intern",
    duration: "Duration: 1 Year, Jan 2021 - Jan 2022",
    firm: "Company: IBM Indian Software Labs, MaaS360",
  };
  return (
    <div
      className={LandingPageState + " transtion-opacity duration-300 ease-in"}
    >
      <div className="w-full flex flex-col items-center">
        <ProjectIntro
          title="IBM Cloud and Cognitive | UX Design Internship"
          subTitle="Driving UI & UX modernisations"
          miniDesc={miniDesc}
          image={process.env.PUBLIC_URL + "/images/ibm(hero-image)(75).png"}
        />

        <ProjectSubDescContainer sectionTitle="Context">
          <ProjectSection
            color="text-blue-ibm"
            heading="What is MaaS360?"
            desc={
              <span>
                <p>
                  MaaS360 is IBM's enterprise solution that aids organizations
                  in securing smartphones, tablets, laptops and the internet of
                  things. It helps them manage keep their devices and data
                  secure.
                </p>
                <br />
                <p>
                  {/* MaaS360 is undergoing extensive modernisations which opens up
                  oppurtunites for designers to craft new and improved
                  workflows. */}
                  In the span of 1 year I worked on two projects in
                  collaboration with the director, design team, engineers and
                  product managers.
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

          <ProjectSection
            color="text-blue-ibm"
            heading="Two projects I worked on"
            desc={
              <span>
                <ul className="list-disc list-inside">
                  <li>
                    Led efforts for modernising the self service portal for
                    MaaS360 end-users which hadn't been updated since 2012. This
                    required fresh and extensive research for identifying our
                    user's needs and problems.
                    {/* and
                    prioritizing its development;.  */}
                  </li>
                  <br />
                  <li>
                    Revamping the homepage dashboard for MaaS360. The goal here
                    was to provide our users with a quick overview, reduce
                    navigation time and also align the dashboard with the
                    current strategic direction of the product
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

        <ProjectSubDescContainer sectionTitle="Where to now?">
          <div className="flex flex-col md:flex-row md:gap-16 mt-8">
            <ProjectSectionHome
              className="group w-12/12 md:w-4/12"
              destination="/self-service-portal"
              image={
                process.env.PUBLIC_URL +
                "/images/ibm/project-preview-images/Frame_1.png"
              }
              title={
                <p className="font-avenir-book">
                  Self service portal <br />
                  <p className="text-sm text-gray50">Jan - July 2021 . 6 mos</p>
                </p>
              }
              hoverDesc=""
              // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
              // product, conducted user research, market analysis, created to-be
              // journey maps and designed prototypes for phased implementation."
            />
            <ProjectSectionHome
              className="group md:w-4/12"
              destination="/ibm"
              image={
                process.env.PUBLIC_URL +
                "/images/ibm/project-preview-images/Group_70.png"
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
              hoverDesc=""
              // desc="Designed a new self service portal for IBM's enterprise product MaaS360. Analysed the
              // product, conducted user research, market analysis, created to-be
              // journey maps and designed prototypes for phased implementation."
            />
          </div>
        </ProjectSubDescContainer>
      </div>
    </div>
  );
};

export default IBM;
