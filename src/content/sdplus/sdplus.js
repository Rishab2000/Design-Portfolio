import React from "react";
import ProjectIntro from "../../components/project-intro";

const SdPlus = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro />
      <div>
        <div className="mt-28 mb-8">
          <p className="font-avenir-bold text-3xl">Summary</p>
          <p className="font-avenir-book text-base mt-2">
            As a part of this internship, I designed core features & UI elements
            for our product, SD+. For this effort, I carefully balanced
            usability, business and technical goals. The overall user experience
            of the redesigned product was proved easy to use by multiple users
            in hands-on demos conducted after the interim release.
          </p>
        </div>
        <div className="mb-8">
          <p className="font-avenir-medium text-lg text-green-sdplus">Contributions</p>
          <ul className="list-disc list-inside font-avenir-book mt-2">
            <li>Created an Experience Roadmap 🗺️</li>
            <li>
              Created high fidelity prototypes, wireframes and design
              specifications 📱
            </li>
            <li>
              Worked closely with engineering team to build the product 🔨
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8">
          <p className="font-avenir-medium text-lg text-green-sdplus">About SD+</p>
          <p className="font-avenir-book text-base mt-2">
            A real estate sustainability product that helps builders make
            informed decisions through data driven insights. We suggest best
            sustainable interventions to help construct green buildings
          </p>
        </div>
        <div className="mb-8">
          <p className="font-avenir-medium text-lg text-green-sdplus">Main components of the product</p>
          <p className="font-avenir-book text-base mt-2">
            The product consists of two main components. Interventions designed
            for the architectural team to view our recommendations. Insights
            provides information for CEOs to understand the project progress.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-8 mb-8">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Insights_Unscrolled_1x.png"
          }
          alt="temp"
          className="w-full"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Interventions.png"
          }
          alt="temp"
          className="w-full"
        />
      </div>
      <div>
        <p className="font-avenir-bold text-3xl">Scoping</p>
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="font-avenir-medium text-lg text-green-sdplus">Understanding problems faced by users</p>
            <p className="font-avenir-book text-base mt-2">
              With the initial version of the product, we attempted to validate
              its usability through demos. Through this, we learned that they
              found the current usability & functionality insufficient for their
              needs.
            </p>
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Comments/1(Client)-02.svg"
            }
            alt="temp"
            className="mb-12"
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="font-avenir-medium text-lg text-green-sdplus">We realized...</p>
            <p className="font-avenir-book text-base mt-2">
              that a well defined design goal was necessary. I recomended
              creating an Experience Roadmap (Exr), which aims to help teams
              stay focused, create stability & drive a consistent user
              experience.
            </p>
          </div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Comments/2(me).svg"
            }
            alt="temp"
            className="mb-12"
          />
        </div>
      </div>
      <div className="bg-blue-sdplus w-screen py-6 mb-8">
        <p className="w-10/12 mx-auto text-white font-avenir-bold opacity-60">Design Challenge</p>
        <p className="w-10/12 mx-auto text-white">How might we refocus and restructure the product's experience? </p>
      </div>
      <div>
        <p className="font-avenir-bold text-3xl">Approach</p>
        <div>
          <p className="font-avenir-medium text-lg text-green-sdplus">Defining user stages, from pre-sale to post-sale</p>
          <p className="font-avenir-book text-base mt-2">
            The first thing we took up was organizing our roadmap at a high
            level, as user stages and calling them Experiences. From start to
            finish, we mapped five distinct stages our users would pass through.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Roadmap/Customer_journey_task.png"
            }
            alt="temp"
            className="mt-4 mb-12"
          />
        </div>
        <div>
          <p className="font-avenir-medium text-lg text-green-sdplus">Identifying touchpoints</p>
          <p className="font-avenir-book text-base mt-2">
            We now started defining our users' interactions by describing
            touchpoints our users would use to interact with our organization.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Roadmap/Customer_journey_touchpoints.png"
            }
            alt="temp"
            className="mt-4 mb-12"
          />
        </div>
        <div>
          <p className="font-avenir-medium text-lg text-green-sdplus">Synthesizing insights</p>
          <p className="font-avenir-book text-base mt-2">
            We identified key user and business insights by focusing on
            answering three main questions -
          </p>
          <ul className="list-disc list-inside font-avenir-book mt-2 mb-8">
            <li>What users are thinking at that time? </li>
            <li>What users are feeling at that time? </li>
            <li>Are there any points of friction the users face? </li>
          </ul>
          <p className="font-avenir-book text-base">
            Next plan of action was to conduct research by communicating
            directly with the users. For this we laid down key points we wanted
            to determine:
          </p>
          <div>
            <ul className="list-disc list-inside font-avenir-book mt-2 mb-8">
              <li>What did they like about the product? </li>
              <li>What didn’t you like about the product?</li>
              <li>
                What are their feelings towards the current process in place?
                Does it meet their expectations?
              </li>
              <li>
                What touchpoints and steps does the user take in each phase to
                achieve their goal? How do they find and interact with these
                necessary touchpoints?
              </li>
              <li>
                Is there any friction as they pass through different customer
                phases?
              </li>
              <li>How easy is the transition between each phase?</li>
            </ul>
            <p className="font-avenir-book text-base mb-8">
              However, due to time constraints, we were not able to gather
              sufficient data and decided to do it after the next release of the
              product. This would help us investigate problems that may arise
              later.
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/ftN31y6wNaJxCkLYNS/giphy.gif"
            alt="A GIF of a cute cat :)"
            className="mx-auto"
          />
        </div>
      </div>
      <div>
        <p className="font-avenir-bold text-3xl">Detailing</p>
        <div>
          <p className="font-avenir-medium text-lg text-green-sdplus">Establishing gaps in our product's Focal Engagement</p>
          <p className="font-avenir-book text-base mt-2">
            Using the Jobs to be Done framework, as a team we chalked up a few
            user stories. This showed multiple points in the experience which
            were misaligned to what the user needs. We boiled them all down to
            three main areas:
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col w-4/12">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-01.svg"}
              alt="A GIF of a cute cat :)"
              className="w-5/10"
            />
            <p className="font-avenir-book text-sm mt-2">Minimal business insights for CEOs</p>
          </div>
          <div className="flex flex-col w-4/12">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-02.svg"}
              alt="A GIF of a cute cat :)"
            />
            <p className="font-avenir-book text-sm mt-2">Missing dynamic & visual data</p>
          </div>
          <div className="flex flex-col w-4/12">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-03.svg"}
              alt="A GIF of a cute cat :)"
            />
            <p className="font-avenir-book text-sm mt-2">Lack of collaboration & communication between architects</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p>Brainstorming for ideas</p>
            <p>
              We conducted a brainstorming session to explore a vast number of
              ideas and approaches to solve the target problems. We later
              organized and filtered our ideas by creating two categories,
              Improvements and New. This helped us understand the nature of the
              idea and an overview plan of implementation.
            </p>
          </div>
          <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Ideas/ideas.png"}
              alt="A GIF of a cute cat :)"
            />
        </div>
      </div>
    </div>
  );
};

export default SdPlus;
