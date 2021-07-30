import React from "react";

const ProjectIntro = () => {
  return (
      <div>
          <div className="mt-24 flex flex-col">
        <p className="font-avenir-roman text-title-colour text-2xl">
          SD+ | UX Design Internship
        </p>
        <p className="font-avenir-book text-gray40 text-base">
          Creating an experience roadmap
        </p>
      </div>
      <div className="mt-8 font-avenir-roman text-base text-desc-colour">
        <p>My Role: Research, Product design roadmap, UX and UI design </p>
        <p>Duration: 3 months, Apr - Jun 2020 </p>
        <p>Firm: Smarter Dharma </p>
      </div>
      <div className="mt-28">
        <img
          src={process.env.PUBLIC_URL + "/images/sdplus(hero-image).png"}
          alt="temp"
        />
      </div>
    </div>
  );
};

export default ProjectIntro;
