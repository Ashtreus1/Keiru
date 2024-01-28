"use client"
import Image from "next/image";
import TabButton from "./TabButton";
import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutSection = ({ avatar, onSelectAvatar }) => {
  const [tab, setTab] = useState("skills");
  const controls = useAnimation();
  const imageContainerRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
    controls.start({ opacity: 0, x: -30 });
    controls.start({ opacity: 1, x: 0 });
  };

  const handleImageLoad = () => {
    const divWidth = imageContainerRef.current.offsetWidth;
    const divHeight = imageContainerRef.current.offsetHeight;

    controls.start({
      opacity: 1,
      x: 0,
      width: divWidth,
      height: divHeight,
    });
  };

  let aboutContent = {}; 

  switch (avatar) {
    case 'jameson.png':
      aboutContent = {
        title: 'About Jameson',
        description: 'Meet Jameson, a passionate software engineer with aspirations to delve into the realm of data science. Armed with a curiosity for problem-solving and a knack for coding, Jameson is on a journey to create innovative solutions and gain insights from data. Here\'s a glimpse into his world:',
    
        skills: [
          'Full Stack Development',
          'Data Structures and Algorithms',
          'Machine Learning',
          'JavaScript (React, Node.js)',
          'Python (NumPy, Pandas, Scikit-Learn)',
          'Database Management (MongoDB)',
          'Version Control (Git)',
          'UI/UX Design',
          'Problem-solving',
          'Critical Thinking',
        ],
        education: [
            'Cavite State University - Main', 
            'Youtube Courses', 
            'Online Documentation',
            'FreeCodeCamp',
            'The Odin Project',
            'EDX Harvard CS50 Online Course'
        ],
      };
      break;
    case 'junell.jpg':
      aboutContent = {
        title: 'About Junell',
            description: 'Meet Junell, an enthusiastic UI/UX and graphic designer who thrives on transforming ideas into visually stunning and user-friendly experiences. With a keen eye for aesthetics and a passion for creativity, Junell brings designs to life that captivate and engage. Here\'s a glimpse into his world:',

            skills: [
            'UI/UX Design',
            'Graphic Design',
            'Web Design',
            'Mobile App Design',
            'Prototyping (Figma, Adobe XD)',
            'User Research',
            'Typography',
            'Color Theory',
            'Illustration',
            'Branding',
            ],
            education: ['Cavite State University - Main', 'Youtube Courses', 'Online Design Courses', 'Continuous Exploration of Design Trends'],
      };
      break;
    default:
      aboutContent = {
        title: 'Dive into Our World',
        description: `Welcome to our vibrant and creative space! We are a duo of
        innovative individuals with a shared passion for pushing boundaries
        and creating digital experiences that leave a lasting impact. Our
        journey in the world of technology is fueled by a relentless desire
        to learn, experiment, and collaborate`,

        skills: [
            'HTML & CSS',
            'JavaScript',
            'React',
            'NodeJS',
            'Figma',
            'MongoDB',
            'UI/UX Design',
            'Graphic Design',
            'Web Design',
            'Mobile App Design',
            'Prototyping (Figma, Adobe XD)',
            'User Research',
            'Typography',
            'Color Theory',
            'Illustration',
            'Branding',
            'and many more...',
          ],
          education: [
            'Cavite State University - Main',
            'Youtube Courses',
            'Online Courses / Documentation',
            'Continuous Exploration of Design Trends',
          ],
      };
      break;
}

  return (
    <section className="text-white relative overflow-hidden" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="bg-black bg-opacity-70 absolute inset-0 z-0"></div>
        <div
          ref={imageContainerRef}
          className="mt-4 md:mt-0 text-left flex flex-col h-full relative z-10"
        >
          <motion.h2
            className="text-4xl font-bold text-cyan-400 mb-4 pt-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutContent.title}
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {aboutContent.description}
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </motion.div>

          <motion.div
            className="mt-8 flex"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            >
          <div className="max-h-[600px] overflow-y-auto">
            <div className="bg-opacity-50 bg-cyan-600 p-4 rounded-md hover:bg-opacity-70 w-full transition p-10">
                <ul className="list-disc pl-2 text-white">
                {Array.isArray(aboutContent[tab]) &&
                    aboutContent[tab].map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
          </div>
            </motion.div>
        </div>

        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 30, width: 0, height: 0, objectFit: "cover"}}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className="relative overflow-hidden rounded-md object-cover"
            style={{ width: 500, height: 500}}
          >
            {avatar !== 'default' ? (
                <Image
                    src={`/images/${avatar}`}
                    width={100}
                    height={100}
                    layout="responsive"
                    alt="About me Image"
                    onLoad={handleImageLoad}
                />
                ) : (
                <Image
                    src="/images/pic1.jpg"
                    alt="About us Image"
                    width={100}
                    height={100}
                    layout="responsive"
                    style={{ objectFit: 'cover' }}
                    onLoad={handleImageLoad}
                />
                )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
