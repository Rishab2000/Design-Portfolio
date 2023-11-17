import React from "react";
import ProjectSectionHome from "../";
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
import "../../../scroll.css"


const FeaturedProject = (props) => {

    function userParallaxText(value, distance) {
        return useTransform(value, [0, 1], ["-70%", "70%"]);
    }
    function userParallaxImage(value, distance) {
        return useTransform(value, [0, 1], ["-10%", "10%"]);
    }
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

    return (

        <section ref={ref} className={props.backgroundColour + " w-full h-screen flex items-center snap-center imageContainer featured-section "}>

            <motion.div
                style={{
                    y: yImage,
                    x: "-45%"
                }}
                className="imageContainer w-5/12 h-[600px] mx-auto ">

                <ProjectSectionHome
                    className={"image w-full 6"}
                    // title="Driving user experience modernization"
                    // role="Product designer | IBM"
                    image={props.imageSrc}
                    link={props.destination}
                />
            </motion.div>
            <motion.h1 className="absolute text-white w-5/12 pb-96"
                style={{
                    y: yText,
                    x: "110%",
                    opacity: isInView ? 1 : 0,
                    transition: "opacity 0.5s ease-in"
                }}
            >{props.title}</motion.h1>
        </section >

    );

}

export default FeaturedProject;