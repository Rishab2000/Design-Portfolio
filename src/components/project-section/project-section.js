import React, { useState } from "react";

const ProjectSection = () => {
  return (
    <div className="container w-full">
        <div className="container w-4/5 mx-auto">
        <p className="font-avenir-bold text-red">Human Centred Designer</p>
        </div>
        <div className='container w-4/5 mx-auto pt-10 pb-20'>
      <p className="font-avenir-book text-base text-desc-colour">
        I design intuitive digital experiences in which every element serves a
        purpose. My designs give form to product visions, and arouses emotions
        in the users.
      </p>
      </div>
      <div className="bg-sd-plus bg-cover bg-center w-full h-80"></div>
      <div className="container w-4/5 mx-auto pt-10">
        <p className="font-avenir-medium text-lg mb-4">
          SD+ | UX Design Internship
        </p>
        <p className="font-avenir-book text-sm text-desc-colour">
          Ideated and designed a B2B product to simplify sustainability.
          Outlined the experience road map of the product to identify parts of
          the product needing engagement and improved them, adopting an agile
          model.
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;
