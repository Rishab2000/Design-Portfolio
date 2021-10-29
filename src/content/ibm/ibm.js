import React from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";

const IBM = () => {
  const miniDesc = {
    duration: "Duration: 1 Year, Jan 2021 - Jan 2022",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro
        title="IBM Cloud and Cognitive | UX Design Internship "
        miniDesc={miniDesc}
        image={process.env.PUBLIC_URL + "/images/ibm(hero-image)(75).png"}
      />

      <ProjectSubDescContainer sectionTitle="Context">
        <ProjectSection
          color="text-blue-ibm"
          heading="Top 3 things about the project (rephrase)"
          desc={
            <span>
              <p>
                MaaS360, is IBM's enterprise solution that aids(change word) IT
                in securing smartphones, tablets, laptops, wearables and the
                internet of things. to help them manage their data centers and
                cloud.
              </p>
              <br />
              <p>
                MaaS360 is undergoing extensive modernistaions and updates which
                opens up oppurtunites and availabilites of whiteboards for
                designers to craft their experiences. I worked on two project in
                the span of 1 year in collaboration with designers, engineers,
                product managers and the director.
              </p>
              <br />
              <p>
                I led the efforts to prioritize developement and deployment of
                MaaS360 modernised self service portal created as part of the
                internship
              </p>
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="Two projects I worked on"
          desc={
            <span>
              <p>
                <span className="font-avenir-bold">
                  Creating a sparkling new self service portal
                </span>
                for MaaS360 end-users; which hadn't been updated since 2012.
                Followed the design thinking process to create a solution that
                aimed at meeting both user and business goals. It required
                ground up research to understand user requirements. Throughout
                the project, I had multiple calls with stakeholders discussing
                the portal's prospects; which made them interested in prioritizing its
                development and rollout.
              </p>
            </span>
          }
        />
      </ProjectSubDescContainer>
      <ProjectSubDescContainer sectionTitle="Where to now">
        <div className="flex items-center gap-12 my-4 bg-gray20">
          <img
            src={process.env.PUBLIC_URL + "/images/ibm.png"}
            alt="Created user persona"
            className="w-4/12"
          />
          <div>
            <p className="font-avenir-medium text-3xl">Self service portal</p>
            <p>Subtitle</p>
          </div>
        </div>
        <div className="flex items-center gap-12 mt-8 mb-4 bg-gray20">
          <img
            src={process.env.PUBLIC_URL + "/images/ibm.png"}
            alt="Created user persona"
            className="w-4/12"
          />
          <div>
            <p className="font-avenir-medium text-3xl">Homepage redesign</p>
            <p>Subtitle</p>
          </div>
        </div>
      </ProjectSubDescContainer>
    </div>
  );
};

export default IBM;
