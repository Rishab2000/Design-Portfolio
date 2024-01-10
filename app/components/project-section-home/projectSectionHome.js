"use client"

import React from "react";
import Description from "./project-section-home-components/description";
import { Card, CardHeader, Image } from "@nextui-org/react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const ProjectSectionHome = (props) => {
  const link = props.link;

  function navigate() {
    location.href = link
  }

  return (
      <div className={props.className + " w-full xl:w-full lg:w-6/12"} >
        {/* h-[700px] */}
        <Card className="w-full h-full " isPressable onPress={() => navigate()}>
          <CardHeader className="absolute z-10 top-1 flex-col !justify-start !items-start p-6 ">

          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className={"z-0 w-full h-full object-cover"}
            src={props.image}
          />
        </Card>
        <h5 className="text-text-secondary self-start text-left pt-4">{props.title}</h5>
    </div>
  );
};

export default ProjectSectionHome;


// src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"}