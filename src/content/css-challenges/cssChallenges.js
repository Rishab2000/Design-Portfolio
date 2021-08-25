import React from "react";
import ProjectIntro from "../../components/project-intro";

const CssChallenges = () => {
  const miniDesc = {
    duration: "Duration: 30 exciting days",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro
        title="Chiral Colonies -
Climate Change App Redesign | UX Case Study "
        miniDesc={miniDesc}
        image={process.env.PUBLIC_URL + "/images/CSS_Challenges_Portfolio.svg"}
      />
      <div className="w-screen bg-background-CSS">
        <div className="w-10/12 max-w-7xl mx-auto bg-background-color">
          <div className="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
};

export default CssChallenges;
