// import React from "react";
// import ProjectSectionHome from "../";
// import { useRef } from "react";
// import {
//     motion,
//     useScroll,
//     useTransform,
//     MotionValue,
//     useMotionValueEvent,
//     useInView,
//     useSpring
// } from "framer-motion";
// import { ArrowForward } from "@material-ui/icons";
// import { Chip } from "@nextui-org/react";
// import "../../../scroll.css"



// const FeaturedProject = (props) => {

//     function userParallaxText(value, distance) {
//         return useTransform(value, [0, 1], ["-70%", "70%"]);
//     }
//     function userParallaxImage(value, distance) {
//         return useTransform(value, [0, 1], ["-50%", "50%"]);
//     }
//     const link = props.link
//     const ref = useRef(null);
//     const isInView = useInView(ref);
//     const { scrollYProgress } = useScroll({ target: ref, offset: ["end start", "start end"] });
//     const yText = userParallaxText(scrollYProgress);
//     const yImage = userParallaxImage(scrollYProgress);


//     useMotionValueEvent(scrollYProgress, "change", (latest) => {
//         console.log("Page scroll: ", latest)
//     })

//     // useMotionValueEvent(y, "change", (latest) => {
//     //     console.log("parallax: ", latest)
//     //   })

//     function navigate() {
//         location.href = link
//     }

//     return (

//         <section ref={ref} className={props.backgroundColour + " w-full h-screen flex items-center snap-center imageContainer featured-section"}>
//             <div className="w-10/12 h-full relative mx-auto">
//                 <motion.div
//                     style={{
//                         x: "85%",
//                         y: yImage,
//                     }}
//                     className="imageContainer w-6/12 h-[600px] mx-auto absolute z-10">

//                     <ProjectSectionHome
//                         className={"image w-full pt-80"}
//                         // title="Driving user experience modernization"
//                         // role="Product designer | IBM"
//                         image={props.imageSrc}
//                         link={props.destination}
//                     />
//                 </motion.div>
//                 <div className={props.textBackgroundColour + " absolute pl-16 pt-24 pb-32 w-7/12 h-full flex flex-col justify-between"}>
//                     <div className="flex flex-col gap-16">
//                         <div className="flex flex-col gap-4">
//                             <motion.h1 className="text-ibm-blue  w-full"
//                                 style={{
//                                     y: yText,
//                                     opacity: isInView ? 1 : 0,
//                                     transition: "opacity 0.5s ease-in"
//                                 }}
//                             >
//                                 {props.title}
//                             </motion.h1>
//                             <p className="w-8/12">{props.desc}</p>
//                         </div>
//                         <div className="flex gap-2">
//                         <Chip variant="flat" classNames={{base:"bg-[#d0e2ff] text-[#0043CE]"}} > {props.company}</Chip>
//                         <Chip variant="flat" classNames={{base:"bg-[#d0e2ff] text-[#0043CE]"}} > {props.role}</Chip>
//                         <Chip variant="flat" classNames={{base:"bg-[#d0e2ff] text-[#0043CE]"}}> {props.duration}</Chip>
//                         </div>
//                     </div>
//                     <button type="reset" onClick={navigate} className="flex gap-4 items-center">
//                         <motion.h4 className="text-ibm-blue learn-more"
//                             style={{
//                                 y: yText,
//                                 opacity: isInView ? 1 : 0,
//                                 transition: "opacity 0.5s ease-in"
//                             }}
//                         >
//                             LEARN MORE
//                         </motion.h4>
//                         <div className="">
//                             <ArrowForward className=" stroke-white scale-150 text-ibm-blue " />
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </section >

//     );

// }

// export default FeaturedProject;

import React from "react";
import ProjectSectionHome from "..";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
    useMotionValueEvent,
    useInView,
    useSpring
} from "framer-motion";
import { ArrowForward } from "@material-ui/icons";
import { Chip } from "@nextui-org/react";
import "../../../scroll.css"



const FeaturedProject = (props) => {

    function userParallaxText(value, distance) {
        return useTransform(value, [0, 1], ["-70%", "70%"]);
    }
    function userParallaxImage(value, distance) {
        return useTransform(value, [0, 1], ["-50%", "50%"]);
    }
    const link = props.link
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end start", "start end"] });
    const yText = userParallaxText(scrollYProgress);
    const yImage = userParallaxImage(scrollYProgress);


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    // useMotionValueEvent(y, "change", (latest) => {
    //     console.log("parallax: ", latest)
    //   })

    function navigate() {
        location.href = link
    }

    return (

        <section ref={ref} className={props.backgroundColour + '  flex flex-col lg:flex-row lg:items-center w-full h-[700px] lg:h-[1000px] xl:h-screen pt-20 lg:pt-0 imageContainer featured-section'}>
            <div className="  gap-8 w-11/12 lg:w-11/12 h-full relative mx-auto">

                <motion.h1 className="text-white feature 2xl:w-11/12 lg:absolute lg:top-[10%] xl:top-[10%] pb-8 lg:pb-8"
                    style={{
                        y: yText,
                        opacity: isInView ? 1 : 0,
                        transition: "opacity 0.5s ease-in"
                    }}
                >
                    {props.title}
                </motion.h1>

                <div className={" lg:absolute flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-end lg:justify-between w-full lg:w-6/12 xl:w-6/12 2xl:w-5/12 lg:bottom-[200px] xl:bottom-[180px] 2xl:bottom-[180px]  pb-8 lg:border-b-1 " + props.textColour}>
                    <p className={'lg:w-6/12 ' + props.textColour}>{props.desc}</p>

                    <button type="reset" onClick={navigate} className=" flex items-center xl:gap-2 2xl:gap-4 z-10">
                        <motion.h4 className={'learn-more ' + props.textColour}
                            style={{
                                y: yText,
                                opacity: isInView ? 1 : 0,
                                transition: "opacity 0.5s ease-in"
                            }}
                        >
                            LEARN MORE
                        </motion.h4>
                        <div className="">
                            <ArrowForward className={props.strokeColour + ' xl:scale-100 2xl:scale-150 ' + props.textColour} />
                        </div>
                    </button>
                </div>

                <motion.div
                    style={{
                        y: yImage,
                    }}
                    className="imageContainer mx-auto lg:absolute lg:left-[55%] xl:left-[55%] lg:bottom-[290px] xl:bottom-[300px] 2xl:bottom-[250px] w-full lg:w-10/12 xl:w-5/12 2xl:w-5/12 h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] ">

                    <ProjectSectionHome
                        className={"image lg:translate-y-24 xl:translate-y-32 2xl:translate-y-20"}
                        // title="Driving user experience modernization"
                        // role="Product designer | IBM"
                        image={props.imageSrc}
                        link={props.destination}
                    />

                </motion.div>


                {/* <p className="w-8/12  text-white">{props.desc}</p> */}

            </div>
        </section >

    );

}

export default FeaturedProject;