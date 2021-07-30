import React from "react";
import ProjectIntro from "../../components/project-intro";

const SdPlus = () => {
  return (
    <div>
      <ProjectIntro />
      <div>
        <div>
          <p>Summary</p>
          <p>
            As a part of this internship, I designed core features & UI elements
            for our product, SD+. For this effort, I carefully balanced
            usability, business and technical goals. The overall user experience
            of the redesigned product was proved easy to use by multiple users
            in hands-on demos conducted after the interim release.
          </p>
        </div>
        <div>
          <p>Contributions</p>
          <ul>
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
        <div>
          <p>About SD+</p>
          <p>
            A real estate sustainability product that helps builders make
            informed decisions through data driven insights. We suggest best
            sustainable interventions to help construct green buildings
          </p>
        </div>
        <div>
          <p>Main components of the product</p>
          <p>
            The product consists of two main components. Interventions designed
            for the architectural team to view our recommendations. Insights
            provides information for CEOs to understand the project progress.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Insights_Unscrolled_1x.png"
          }
          alt="temp"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Interventions.png"
          }
          alt="temp"
        />
      </div>
      <div>
        <p>Scoping</p>
        <div className="flex flex-col">
          <div>
            <p>Understanding problems faced by users</p>
            <p>
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
          />
        </div>
        <div className="flex flex-col">
          <div>
            <p>We realized...</p>
            <p>
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
          />
        </div>
      </div>
      <div>
        <p>Design Challenge</p>
        <p>How might we refocus and restructure the product's experience. </p>
      </div>
      <div>
        <p>Approach</p>
        <div>
          <p>Defining user stages, from pre-sale to post-sale</p>
          <p>
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
          />
        </div>
        <div>
          <p>Identifying touchpoints</p>
          <p>
            We now started defining our users' interactions by describing
            touchpoints our users would use to interact with our organization.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Roadmap/Customer_journey_touchpoints.png"
            }
            alt="temp"
          />
        </div>
        <div>
          <p>Synthesizing insights</p>
          <p>
            We identified key user and business insights by focusing on
            answering three main questions -
          </p>
          <ul>
            <li>What users are thinking at that time? </li>
            <li>What users are feeling at that time? </li>
            <li>Are there any points of friction the users face? </li>
          </ul>
          <p>
            Next plan of action was to conduct research by communicating
            directly with the users. For this we laid down key points we wanted
            to determine:
          </p>
          <div>
            <ul>
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
            <p>
              However, due to time constraints, we were not able to gather
              sufficient data and decided to do it after the next release of the
              product. This would help us investigate problems that may arise
              later.
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/ftN31y6wNaJxCkLYNS/giphy.gif"
            alt="A GIF of a cute cat :)"
          />
        </div>
      </div>
      <div>
        <p>Detailing</p>
        <div>
          <p>Establishing gaps in our product's Focal Engagement</p>
          <p>
            Using the Jobs to be Done framework, as a team we chalked up a few
            user stories. This showed multiple points in the experience which
            were misaligned to what the user needs. We boiled them all down to
            three main areas:
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-01.svg"}
              alt="A GIF of a cute cat :)"
            />
            <p>Minimal business insights for CEOs</p>
          </div>
          <div className="flex flex-col">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-02.svg"}
              alt="A GIF of a cute cat :)"
            />
            <p>Missing dynamic & visual data</p>
          </div>
          <div className="flex flex-col">
            <img
              src={process.env.PUBLIC_URL + "/images/sdplus-project/Problems/icons-03.svg"}
              alt="A GIF of a cute cat :)"
            />
            <p>Lack of collaboration & communication between architects</p>
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
