"use client"

import React from "react";

import Description from "./project-section-home-components/description";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const ProjectSectionHome = (props) => {
  const router = useRouter()
  return (
    <div className={props.className + " w-6/12"} >
     {/* h-[700px] */}
        <Card className="w-full h-[600px] " isPressable onPress={() => router.push(props.link)}>
          <CardHeader className="absolute z-10 top-1 flex-col !justify-start !items-start p-6 ">
            <p className="text-white/60 uppercase font-bold">{props.role}</p>
            <h4 className="text-white self-start text-left">{props.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className={"z-0 w-full h-full object-cover"}
            src={props.image}
          />
        </Card>
      
    </div>
  );
};

export default ProjectSectionHome;


// src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/ibm.png"}