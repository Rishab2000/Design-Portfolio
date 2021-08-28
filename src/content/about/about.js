import React from "react";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";

const About = () => {
    return (<div className="w-full flex flex-col items-center">
        <img
            src={
                process.env.PUBLIC_URL +
                "/images/about/me.jpg"
            }
            alt="me sitting on a beach"
            className="w-12/12 lg:w-3/12 mr-auto lg:mt-24 "
        />
        <ProjectSubDescContainer className="lg:w-full">
            <ProjectSection
                desc={<p>Hi, my name is Rishab.
                    <br /><br />
                    I'm a UX Designer with a drive to learn a myriad of thing to help me curate rich digital
                    experiences. My goal is to create digital experiences that people enjoy while making a
                    social impact. I’m particularly passionate about exploring how UX Design can transcend,
                    from the long held norm of, just existing on screens. </p>}
                customStyleDesc="lg:text-2xl" />
            <ProjectSection
                heading="Qualified in programming"
                desc="I am also qualified in programming; having received my Web Development
                     certificate from Udemy in 2020, taught by Dr Angela yu. I am capable of creating prototypes
                     with web based technologies such as HTML, CSS, Javascript & Node.js; in fact, I designed and 
                     coded this portfolio myself! My knowledge about technical limitations and possibilities also 
                     lead to a strong designer-developer relationships. "
                customStyleDesc="lg:text-2xl"
                customStyleHeading="lg:text-4xl"
                customStyleSpacing="lg:mt-24" />
            <ProjectSection heading="Fun facts"
                desc={<ul className="list-disc list-inside font-avenir-book mt-2">
                    <li>
                        An avid football fan who also plays, represented my college team in several tournaments ⚽
                    </li>
                    <li>
                        I am an ambivert. I exist in the hollow space between extroverts and introverts 🤨
                    </li>
                    <li>
                        You'll find me bending and arching while finding the best angle for a photo 📸
                    </li>
                    <li>
                        Won't stop talking about psychology if you don't stop me 🧠
                    </li>
                </ul>}
                customStyleDesc="lg:text-2xl"
                customStyleHeading="lg:text-4xl"
                customStyleSpacing="lg:mt-24"
            />
            <ProjectSection
                heading="Word around town 😁"

                desc={<p>"I had opportunity to mentor Rishab over six months on a proof-of-concept project.
                    As part of internship, Rishab had to work on self service portal for end-users using MaaS360 app (an
                    enterprise solution). He demonstrated good design thinking capabilities, and communicated + presented
                    his work very nicely to the stakeholders; which made them interested in prioritising the development
                    and rollout of the new designs. He is good at documenting journeys and communicating design decisions,
                    and has a very good attitude. Overall he is a team player and showed a learning spirit to always keep
                    improving the work."
                    <br />
                    <b>-- Rajshree, Senior product designer IBM </b></p>}
                customStyleDesc="lg:text-2xl"
                customStyleHeading="lg:text-4xl"
                customStyleSpacing="lg:mt-24" />
            <ProjectSection desc={<p>"Rishab is an enterprising young UI / UX designer who’s integrated seamlessly into
                our development team. He’s naturally curious about products, asks great questions and tries to understand
                different perspectives of a problem before offering a range of solutions along with his reasoning. His
                pragmatic approach coupled with his knack of improving his technical and functional skill set has been
                a driving factor in our product lifecycle. As a design student, he naturally possesses an abundance of
                creativity, but it’s his willingness to work hard and his dedication that really catches the eye. He
                shows great maturity in his role and as his mentor, I’m looking forward to seeing him continue his
                professional development."
                <br />
                <b>-- Rishab Arora, Product Manager </b></p>}

                customStyleDesc="lg:text-2xl" />
        </ProjectSubDescContainer>
    </div>)
}

export default About