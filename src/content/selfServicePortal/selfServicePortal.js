import React from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";
import { Tweet } from "react-twitter-widgets";

const SelfServicePortal = (props) => {
  const miniDesc = {
    role: "Role: UX design intern",
    duration: "Duration: 6 Months, Jan 2021 - Jun 2021",
    firm: "Company: IBM Indian Software Labs, MaaS360",
  };
  // const LandingPageState = props.hidden ? "opacity-0" : " ";
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro
        title="Self Service Portal Re-design"
        subTitle="Driving efforts for revamping the portal"
        miniDesc={miniDesc}
        image={
          process.env.PUBLIC_URL +
          "/images/ibm/project-preview-images/cover_image_lg.png"
        }
      />

      <ProjectSubDescContainer sectionTitle="Context">
        <ProjectSection
          color="text-blue-ibm"
          heading="Before we gets started"
          desc={
            <span className="flex md:flex-row flex-col items-center mt-8">
              <img
                src="https://media.giphy.com/media/hj8eOHrXqoLntsCyWz/giphy.gif"
                alt="A GIF of a cute cat :)"
                className="w-96 md:w-72 mx-auto my-4 lg:my-0"
              />
              <p className="ml-8 text-lg md:text-center md:text-left md:text-xl lg:text-2xl">
                The nature of this project is confidential and I was not able to
                include screenshots of the process or mockups 🥲
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

        <ProjectSection
          color="text-blue-ibm"
          heading="What is the self service portal"
          desc={
            <span>
              It empowers employees to perform basic device management tasks,
              investigate and fix common issues. Ergo Reducing the number of IT
              support tickets. <br /> 
              {/* It provides employees with key MDM tools so that they can solve
              common issues without any IT involvement. */}
              {/* Self service portal is a service that can be enabled on
              MaaS360 Users can self manage their devices using the self service
              portal  */}
              <div className="flex flex-col w-10/12">
                <img
                  src="images/ibm/User map.png"
                  alt="A GIF of a cute cat :)"
                  className="w-12/12 mt-8 mb-4 rounded-md filter drop-shadow-md"
                />
                <span className=" text-gray40 text-sm mx-auto">
                  ~ Understanding the two users ~
                </span>
              </div>
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="My role throughout the project"
          desc={
            <span>
              I was the designer, along with my mentor, responsible for
              revamping the portal. <br /> <br /> Some of the responsibilities included exploratory research,
              ideation, UI design and strategy planning.
              {/* Was part of a team of 4 designers. */}
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="Project deliverables"
          desc={
            <span>
              <div className="flex flex-wrap font-avenir-book text-sm md:text-base lg:text-base text-center gap-5 mt-2 mb-24">
                <div className="flex flex-col w-40 md:w-48 lg:w-48 bg-cool-gray20 bg-opacity-40 rounded-md py-8 px-4 ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "images/ibm/icons/microscope.svg"
                    }
                    alt="A GIF of a cute cat :)"
                    className="w-8/12 md:w-6/12 lg:w-5/12 mx-auto mb-4"
                  />
                  <p className="mt-2">
                    UX secondary and primary research insights
                  </p>
                </div>
                <div className="flex flex-col w-40 md:w-48 lg:w-48 bg-cool-gray20 rounded-md bg-opacity-40 py-8 px-4">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/ibm/icons/choropleth-map.svg"
                    }
                    alt="A GIF of a cute cat :)"
                    className="w-8/12 md:w-6/12 lg:w-5/12 mx-auto mb-4"
                  />
                  <p className="mt-2">User flows for multiple workflows</p>
                </div>
                <div className="flex flex-col w-40  md:w-48 lg:w-48 bg-cool-gray20 rounded-md bg-opacity-40 py-8 px-4">
                  <img
                    src={
                      process.env.PUBLIC_URL + "images/ibm/icons/heat-map.svg"
                    }
                    alt="A GIF of a cute cat :)"
                    className="w-8/12 md:w-6/12 lg:w-5/12 mx-auto mb-4"
                  />
                  <p className="mt-2">
                    High fidelity mockups complying to&nbsp;
                    <a
                      href="https://www.carbondesignsystem.com/"
                      className="underline hover:text-link-hover-color"
                    >
                      carbon guidelines
                    </a>
                  </p>
                </div>
                <div className="flex flex-col w-40 md:w-48 lg:w-48 bg-cool-gray20 rounded-md bg-opacity-40 py-8 px-4">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/ibm/icons/flow-logs-vpc.svg"
                    }
                    alt="A GIF of a cute cat :)"
                    className="w-8/12 md:w-6/12 lg:w-5/12 mx-auto mb-4"
                  />
                  <p className="mt-2">Feature roadmap for phased production</p>
                </div>
              </div>
            </span>
          }
        />
      </ProjectSubDescContainer>

      <ProjectSubDescContainer sectionTitle="Design process">
        <ProjectSection
          color="text-blue-ibm"
          heading="Getting the ball moving"
          desc={
            <span>
              Conducted a cognitive walkthrough of the current portal,
              using&nbsp;
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                className="underline hover:text-link-hover-color"
              >
                NN group design heuristics.
              </a>
              &nbsp;Also, conducted competitive analysis to understand the
              landscape for self service portals in this context.
              <br /> <br />
              Reviewed business needs to gain clarity regarding the strategic
              direction the portal should head in.
              {/* would fit into the self
              service portal story */}
            </span>
          }
        />
        <ProjectSection
          color="text-blue-ibm"
          heading="Understanding user needs"
          desc={
            <span>
              Here we had to look into both admin's and employee's pov.
              Understand goals admins aim to achieve by activating the portal
              and employees when they login to use it.
              <br />
              <br />
              <span className="text-xl font-avenir-bold">
                Customer interviews
              </span>
              <br />
              Conducted interviews and was in continuous contact with an user to
              receive constant feedback on hypothesis and assumptions we
              developed throughout the project.
              {/* This provided us insight on
              their needs that helped us decide and prioritize what's most
              important. */}
              <br />
              <br />
              <div className="p-8 bg-blue-ibm rounded-md">
                <span className="text-white text-2xl">
                  Focusing on our users needs, made it easier for us to
                  determines what's important. This helped make our offering
                  more relevant and essential.
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
              "Design directions” aimed to provide a glimpse of the portals
              different meaningful characteristics.
              <br />
              <br />
              To keep the teams aligned to generate meaningful user outcomes we
              generate a few&nbsp;
              <a
                href="https://www.ibm.com/design/thinking/page/framework/keys/hills"
                className="underline hover:text-link-hover-color"
              >
                hills.
              </a>
              {/* They helped us stay
              aligned as to where to go, not exactly on how to get there. */}
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="The pretty part of it"
          desc={
            <span>
              {/* Two fonts walk into a bar, the bartender says “we don't serve your
              type here.” So they called the serif "click here to smile link"{" "}
              <br /> <br /> */}
              Throughout the "making" process we keep ourselves value
              oriented rather than goal oriented, we always asked ourselves:
              <br />
              <br />
              <ul className="list-disc list-inside text-2xl">
                <li> Who are our users?</li>
                <li> What is their current experience?</li>
                <li> How could it be improved?</li>
              </ul>
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="Restless Reinvention"
          desc={
            <span>
              Organized regular calls with multiple stakeholders, to constantly
              iterate and improve the solution. Went through multiple cycles of
              feedback and iterations before we solidified on a design.
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Your original{" "}
                  <a href="https://twitter.com/hashtag/design?src=hash&amp;ref_src=twsrc%5Etfw">
                    #design
                  </a>{" "}
                  vs. your second iteration.{" "}
                  <a href="https://twitter.com/hashtag/UX?src=hash&amp;ref_src=twsrc%5Etfw">
                    #UX
                  </a>{" "}
                  <a href="https://twitter.com/hashtag/UI?src=hash&amp;ref_src=twsrc%5Etfw">
                    #UI
                  </a>{" "}
                  <a href="https://t.co/y2nbx3dBEU">
                    pic.twitter.com/y2nbx3dBEU
                  </a>
                </p>
                &mdash; Doug Collins (@DougCollinsUX){" "}
                <a href="https://twitter.com/DougCollinsUX/status/1465437029391425538?ref_src=twsrc%5Etfw">
                  November 29, 2021
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </span>
          }
        />

        <ProjectSection
          color="text-blue-ibm"
          heading="Roadmap for phased implementation"
          desc={
            <span>
              Since the project received interest from the director, he wanted
              to prioritize implementation of the portal.
              <br /> <br />
              To aid swift implementation, we decided on creating versions that
              required gradual changes on the backend.
            </span>
          }
        />
      </ProjectSubDescContainer>
      <ProjectSubDescContainer sectionTitle="Key learnings">
        <ProjectSection
          color="text-blue-ibm"
          heading="Developing a T-shaped skill set"
          desc={
            <span>
              Being a member of an enterprise team, I worked alongside system
              architects, product managers, front-end developers and business
              leaders. <br /> <br /> This introduced me to diversify my
              knowledge of skills into other areas which would be expected of an
              enterprise designer.
            </span>
          }
        />
        <ProjectSection
          color="text-blue-ibm"
          heading="Being intentional"
          desc={
            <span>
              Learnt the importance of having specific goals in mind. For
              example, when reaching out to team members, I aimed at being as
              intentional as possible with both their and my time, either by
              coming in with questions or asking for specific feedback on my
              work.
              {/* either by coming in with questions or asking for specific feedback on my work. */}
              {/* Much of what I learned came from collaborations.
              I’d spend meetings discussing interaction and visual decisions,
              weighing the pros and cons of UI explorations, and thinking
              through how users would perceive and process content at each
              interaction touchpoint. */}
            </span>
          }
        />{" "}
        <Tweet />
      </ProjectSubDescContainer>
    </div>
  );
};

export default SelfServicePortal;
