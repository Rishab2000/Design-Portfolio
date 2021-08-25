import React from "react";
import ProjectIntro from "../../components/project-intro";
import NormalContainer from "../../components/css-challenge/normal-container";

const CssChallenges = () => {
  const miniDesc = {
    duration: "Duration: 30 exciting days",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro
        title="30 days of code "
        miniDesc={miniDesc}
        image={process.env.PUBLIC_URL + "/images/CSS_Challenges_Portfolio.svg"}
      />
      <div className="w-screen bg-background-CSS py-12">
        <div className="w-300 mx-auto bg-background-color py-12">
          <NormalContainer
            containerClass="flex-row items-center"
            challenge="Challenge_004"
            windowClass="ml-12"
            desClass="ml-auto mr-12"
            day="Day 03"
            title="Loading animation"
            desc="On clicking the button, a loading animation starts and alerts 
              when completed."
          />

          <NormalContainer
            containerClass="flex-row-reverse items-center"
            challenge="Challenge_009"
            windowClass="mr-12"
            desClass="mr-auto ml-24"
            day="Day 09 "
            title="Weather Widget"
            desc="A compact widget displaying the weather stats and also a 
              visual related to it (not live)."
          />

          <NormalContainer
            containerClass="flex-col-reverse"
            challenge="Challenge_015"
            windowClass="w-200 h-200 mx-12"
            desClass="ml-24 mb-12"
            day="Day 15"
            title="Pricing System"
            desc="On hovering over each card, the features of that subscription
              are shown below."
          />

          <NormalContainer
            containerClass="flex-row items-center"
            challenge="Challenge_018"
            windowClass="ml-12"
            desClass="ml-auto mr-12"
            day="Day 18 "
            title="Record Button"
            desc="On clicking the button, an animation indicating that the 
            device is recording is shown."
          />

          <NormalContainer
            containerClass="flex-row-reverse items-center"
            challenge="Challenge_020"
            windowClass="mr-12"
            desClass="mr-auto ml-24"
            day="Day 20 "
            title="Carousel"
            desc="An infinite carousel which cycles through different 
            words to form a sentence."
          />

          <NormalContainer
            containerClass="flex-row items-center"
            challenge="Challenge_027"
            windowClass="ml-12"
            desClass="ml-auto mr-12"
            day="Day 27"
            title="Animation experiment"
            desc="An experiment to gauge the extent of my knowledge 
            about CSS animation. Click the circle to view the result 😛."
          />

          <NormalContainer
            containerClass="flex-row-reverse items-center"
            challenge="Challenge_030"
            windowClass="mr-12"
            desClass="mr-auto ml-24"
            day="Day 30 "
            title="Toggle button"
            desc="The simple toggle button made gripping with a 
            simple animation when clicked on."
          />
        </div>
      </div>
    </div>
  );
};

export default CssChallenges;
