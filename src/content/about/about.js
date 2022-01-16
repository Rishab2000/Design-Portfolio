import React from "react";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <img
        src={process.env.PUBLIC_URL + "/images/about/Me2-1.jpg"}
        alt="me sitting on a beach"
        className="w-12/12 lg:w-3/12 mr-auto lg:mt-24 "
      />
      <ProjectSubDescContainer className="lg:w-full">
        <ProjectSection
          desc={
            <p>
              Hi, this is Rishab.
              <br />
              <br />
              I'm a UX Designer with a drive to learn a myriad of things to help
              me curate rich digital experiences. My goal is to inspire delight
              through considerate and delightful interactions. Design has an
              immense psychological impact. Every product should be created with
              the utmost consideration towards minimizing negative emotions. An
              articulate design brings relief, utility, and, if possible,
              beauty, into people's lives. Through my work, I hope to reduce
              digital anxiety and create delightful experiences.
              <br />
              {/* Most of my work has been in the UI/UX field, but have been focused
              on moving to Product Design for designing end-to-end experiences,
              and creating fluent digital products that engage, satisfy and
              educate.  */}
              {/* Empathy in all stages of the design process will drive the
              formation of an ideal future while increasing the spectrum by
              looking at the bigger picture of how design, technology, and
              ubiquitous computing can make a larger impact on our everyday
              lives. One of the milestones in my design career is to provide the
              vision of making humans a space fairing species and to propel
              accessibility for space exploration to new heights. User
              Experience is a critical backbone for creating products for Zero-G
              environments, spacecraft controls, and navigation systems. I was
              born in Hungary, you'll notice the funky accent! Immigrated to the
              U.S. when I was 11 years old without speaking any English. Grew up
              in the rainy suburbs of Seattle, and moved up to downtown for UW.
              A decade later I became a United States Citizen! */}
              <br />
              Apart from design, I've learnt some amount of programming,
              mostly focusing on web frontend development and also some aspects
              of backend systems. My knowledge about technical possibilities
              and limitations helps lead to strong designer-developer
              relationships.
            </p>
          }
          customStyleDesc="lg:text-2xl"
        />

        <ProjectSection
          heading="When I'm not designing, I can be found"
          desc={
            <ul className="list-disc list-inside font-avenir-book mt-2">
              <li>Playing football every weekend ⚽</li>
              <li>Exploring hidden gems in the city - mostly restaurants 🍱</li>
              <li>
                Bending and arching while finding the best angle for a photo 📸
              </li>
              <li>Jamming out and lip syncing to music 🎶</li>
            </ul>
          }
          customStyleDesc="lg:text-2xl"
          customStyleHeading="lg:text-4xl"
          customStyleSpacing="lg:mt-24"
        />
        <ProjectSection
          heading="Word around town 😁"
          desc={
            <p>
              {/* "I had opportunity to mentor Rishab over six months on a
              proof-of-concept project. As part of internship, Rishab had to
              work on self service portal for end-users using MaaS360 app (an
              enterprise solution). */}
              <br />
              "He demonstrated good design thinking capabilities, and
              communicated + presented his work very nicely to the stakeholders;
              which made them interested in prioritising the development and
              rollout of the new designs.
              <br />
              <br />
              He is good at documenting journeys and communicating design
              decisions, and has a very good attitude. Overall he is a team
              player and showed a learning spirit to always keep improving the
              work."
              <br />
              <br />
              <em>-- Rajshree, Senior Product Designer, IBM </em>
            </p>
          }
          customStyleDesc="lg:text-2xl"
          customStyleHeading="lg:text-4xl"
          customStyleSpacing="lg:mt-24"
        />
        <hr />
        <ProjectSection
          desc={
            <p>
              "Rishab is an enterprising young UI / UX designer who's integrated
              seamlessly into our development team.
              <br />
              <br />
              He's naturally curious about products, asks great questions and
              tries to understand different perspectives of a problem before
              offering a range of solutions along with his reasoning. His
              pragmatic approach coupled with his knack of improving his
              technical and functional skill set has been a driving factor in
              our product lifecycle.
              <br />
              <br />
              As a design student, he naturally possesses an abundance of
              creativity, but it's his willingness to work hard and his
              dedication that really catches the eye. He shows great maturity in
              his role and as his mentor, I'm looking forward to seeing him
              continue his professional development."
              <br />
              <br />
              <em>-- Rishab Arora, Product Manager, Smarter Dharma </em>
            </p>
          }
          customStyleDesc="lg:text-2xl"
        />
      </ProjectSubDescContainer>
    </div>
  );
};

export default About;
