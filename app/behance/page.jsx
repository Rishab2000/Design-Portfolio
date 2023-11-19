import React from 'react';
import ProjectIntro from '../components/project-intro';
import ProjectSection from '../components/project-page-components/project-section'
import ProjectSubDescContainer from '../components/project-page-components/sub-desc-container';
import Layout from '../components/layout/Layout';
import { Image } from '@nextui-org/react';

const Behance = () => {
    const miniDesc = {
        duration: "Duration: 1 week",
    };
    return (
        <Layout>
            <div className="w-full flex flex-col items-center">
                <ProjectIntro
                    title="Behance Search Experience
            Redesign "
                    miniDesc={miniDesc}
                    image={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/behance_hero_image.png"}
                />
                <ProjectSubDescContainer sectionTitle="Introduction">
                    <p className="mt-2 mb-8">
                        Behance is a platform for creatives of just about every field and
                        discipline to showcase their work in the form of &quot;projects&quot;. You can
                        search, like and follow people&apos;s works.
                        <br />
                        <br />
                        A redesign project initiated that includes a complete redesign of the
                        search experience in the Behance website. The process includes a
                        holistic study of the UI & UX elements and evaluating them based on
                        the NN group heuristics.
                        <br />
                        <br />
                        Subsequently followed by improvements and tweaks in multiple places to
                        make the experience more seamless.
                    </p>
                </ProjectSubDescContainer>
                <div className="bg-red-100 w-screen py-6 mb-8">
                    <div className="w-8/12 max-w-7xl mx-auto text-white text-center flex justify-between ">
                        <div className="flex flex-col lg:w-2/12 justify-start  p-4">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/Index_icons/user-01.svg"}
                                alt="Investigating emoji 🧐"
                                className="w-12 mx-auto"
                            />
                            <p className="mt-2label">Empathizing</p>
                        </div>
                        <div className="flex flex-col lg:w-2/12 justify-start  p-4">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/Index_icons/evaluate-01.svg"}
                                alt="Heart emoji ❤️"
                                className="w-12 mx-auto"
                            />
                            <p className="mt-2 label">Heuristic evaluation</p>
                        </div>
                        <div className="flex flex-col lg:w-2/12 justify-start p-4">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/Index_icons/selection1-01.svg"}
                                alt="Thinking emoji 🤔"
                                className="w-12 mx-auto"
                            />
                            <p className="mt-2 label">Prioritizing problems</p>
                        </div>
                        <div className="flex flex-col lg:w-2/12 justify-start p-4">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/Index_icons/Ideate-01.svg"}
                                alt="Big boi on laptop 🧑‍💻"
                                className="w-12 mx-auto"
                            />
                            <p className="mt-2 label">Ideation</p>
                        </div>
                        <div className="flex flex-col lg:w-2/12 justify-start p-4">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/Index_icons/testing-01.svg"}
                                alt="Smart boi doing science 🧑‍🔬"
                                className="w-12 mx-auto"
                            />
                            <p className="mt-2 label">User testing</p>
                        </div>
                    </div>
                </div>
                <ProjectSubDescContainer sectionTitle="Process">
                    <ProjectSection
                        color="text-blue-behance"
                        heading="Understanding the user"
                        desc={<p> I listed down observations about how my friends use the platform and for what purpose. Looked into various contexts
                            of use of the platform. Based on this research, I defined a user statement to help
                            guide decisions further down the line. </p>}
                    />
                </ProjectSubDescContainer>
                <Image
                    removeWrapper
                    src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/user-01.png"}
                    alt="Board of sticky notes displaying connection between data points"
                    className="w-12/12 my-12 lg:-mt-4 lg:mb-24 "
                />
                <ProjectSubDescContainer className="lg:w-10/12">
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Evaluating the current search experience"
                        desc={<p>To evaluate the current search experience on Behance I followed NN groups heuristics for UI evaluation.</p>}
                    />
                    <div className="flex flex-row flex-wrap gap-8 font-avenir-book text-xs lg:text-sm mt-6 lg:-mt-4 mb-12 lg:mb-24">
                        <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow-md justify-center items-center gap-12 py-5">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/icons/confusion.svg"}
                                alt="tree illustration"
                                className="w-1/12 lg:w-2/12"
                            />
                            <p className="label w-5/12">Lack of a dedicated search button.</p>
                        </div>
                        <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow-md justify-center items-center   gap-12 py-5">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/icons/Grouping.svg"}
                                alt="tree illustration"
                                className="w-1/12 lg:w-2/12"
                            />
                            <p className="label w-5/12">
                                Clustering of the filter and sort functionality with poor
                                categorizing
                            </p>
                        </div>
                        <div className=" w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow-md justify-center items-center  gap-12 py-5">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/icons/Choice-01.svg"}
                                alt="tree illustration"
                                className="w-1/12 lg:w-2/12"
                            />
                            <p className="label w-5/12">
                                No option to easily remove or clear individual filters
                            </p>
                        </div>
                        <div className="w-full lg:w-5/12 h-20 lg:h-32 flex bg-background-color filter drop-shadow-md justify-center items-center  gap-12 py-5">
                            <Image
                                removeWrapper
                                src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/icons/Variety-01.svg"}
                                alt="tree illustration"
                                className="w-1/12 lg:w-2/12"
                            />
                            <p className="label w-5/12">
                                Cannot browse through projects in different categories.
                            </p>
                        </div>
                    </div>
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Understanding the problems to work on"
                        desc={
                            <span>
                                <p>
                                    Next, I prioritized the problems to work on by using an
                                    evaluation matrix. Mapping problems on a graph which compare
                                    them on two main parameters:
                                </p>
                                <ul className="list-disc list-inside font-avenir-book mt-2 mb-2">
                                    <li>&quot;User value&quot; the solution would deliver</li>
                                    <li>&quot;Estimated time & effort&quot; required to solve the problem</li>
                                </ul>
                            </span>
                        }
                    />
                    <div className="flex justify-between items-start">
                        <Image
                            removeWrapper
                            src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/1.jpg"}
                            alt="sticky notes of discovered problems"
                            className="w-3/12 lg:w-3/12"
                        />
                        <Image
                            removeWrapper
                            src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/2.jpg"}
                            alt="evaluation matrix used"
                            className="w-4/12 lg:w-4/12"
                        />
                        <Image
                            removeWrapper
                            src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/3.jpg"}
                            alt="problem stick notes mapped on the evaluation matrix"
                            className=" w-4/12 lg:w-4/12"
                        />
                    </div>
                </ProjectSubDescContainer>
                <ProjectSubDescContainer sectionTitle="Outcome" className="lg:w-10/12">
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Categorizing and minimizing redundancy"
                        desc={<p>Categorizing projects (based on frequently viewed creative fields)
                            in the initial &quot;browse page&quot; allowing users to quickly browse through them
                            when they are not looking for something specific to search.</p>}
                    />
                    <Image
                        removeWrapper
                        src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/final/1_opt.png"}
                        alt="problem stick notes mapped on the evaluation matrix"
                        className="lg:w-full mb-28"
                    />
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Maximizing focus by reducing distractions"
                        desc={<p>While searching, the user is allowed to focus on what&apos;s important by
                            darkening everything else, aiming to alleviate the cognitive load. The addition
                            of a search button directs the user to the next step in the process. </p>}
                    />
                    <Image
                        removeWrapper
                        src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/final/2_opt.png"}
                        alt="problem stick notes mapped on the evaluation matrix"
                        className="lg:w-full mb-28"
                    />
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Optimizing functionality using Occam's Razor "
                        desc={<p>Sort and filter buttons separated to prevent mis-clicks and also the
                            removal of the sub-navigation tab to eliminate redundancy. An extra feature I
                            added is, &quot;view similar projects&quot; button. This button appears when the user
                            hovers over a project. It helps produce more insightful results which are similar
                            to that project on the same page.</p>}

                    />
                    <Image
                        removeWrapper
                        src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/final/3_opt.png"}
                        alt="problem stick notes mapped on the evaluation matrix"
                        className="lg:w-full mb-28"
                    />
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading="Maintaining context to boost usability"
                        desc={<p>Clicking &quot;filter&quot; reveals the options on the same page rather than in
                            a modal box. This aims to maintain consistency and flow in the minds of the user. </p>}

                    />
                    <Image
                        removeWrapper
                        src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/final/4_opt.png"}
                        alt="problem stick notes mapped on the evaluation matrix"
                        className=" lg:w-full mb-28"
                    />
                    <ProjectSection
                        width="lg:w-9/12"
                        color="text-blue-behance"
                        heading='Quick search aimed towards "Power Users" '
                        desc={<p>The user can begin typing from any page in Behance, and after having typed
                            three characters the quick search shows up. They can continue typing to then
                            search for it. This function is disabled in special cases like, commenting or
                            using special keys.
                        </p>}
                    />
                    <Image
                        removeWrapper
                        src={"https://rishabportfolioimages.s3.ap-south-1.amazonaws.com/behance/pictures/final/5_opt.png"}
                        alt="problem stick notes mapped on the evaluation matrix"
                        className="w-full mb-28"
                    />
                </ProjectSubDescContainer>
            </div>
        </Layout>
    );
}

export default Behance;