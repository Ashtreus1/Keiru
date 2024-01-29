import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "To-do List Application",
    description: "A simple to-do list application to help you manage your tasks efficiently. Add, edit, and delete tasks with ease. Stay organized and boost your productivity!",
    image: "/images/1.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Showcase your photography skills with a stunning portfolio website. Display your best shots, create galleries, and attract clients or followers with your visual storytelling.",
    image: "/images/2.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Powerful e-commerce platform for selling products online. Manage your inventory, process orders, and provide a seamless shopping experience to your customers.",
    image: "/images/3.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Satisfy your cravings with our food ordering application. Browse through a variety of cuisines, place your order, and enjoy delicious meals delivered to your doorstep.",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Event Management System",
    description: 'A comprehensive Event Management System for organizing and managing events, including features for event creation, ticketing, attendee management, and post-event analytics. Suited for a web application to provide a robust and feature-rich experience.',
    image: "/images/5.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description: " A Fitness Tracker App for tracking workouts, setting fitness goals, and monitoring progress. Best suited as a mobile application for on-the-go accessibility and integration with mobile sensors for enhanced tracking capabilities.",
    image: "/images/6.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Real State Listing Platform",
    description: " A user-friendly platform for real estate listings with advanced search functionalities, detailed property information, and user profiles. Best suited as a web application for its comprehensive features and ease of access.",
    image: "/images/7.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Travel Blogging Platform",
    description: "A specialized Travel Blogging Platform for users to share travel experiences, tips, and photos. Suited for a web application to allow users to create and manage content easily.",
    image: "/images/8.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Online Learning Management System",
    description: "An Online Learning Management System facilitating e-learning with features such as course creation, student enrollment, progress tracking, and interactive quizzes. Best suited as a web application for a comprehensive learning experience.",
    image: "/images/9.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Task Collaboration Platform",
    description: " A collaborative platform for task management and project collaboration with features like task assignment, progress tracking, file sharing, and real-time communication. Suited for both web and mobile applications for flexibility and accessibility.",
    image: "/images/10.jpg",
    tag: ["All", "Mobile", "Web"],
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Health and Wellness App",
    description: "A holistic Health and Wellness App integrating features for fitness tracking, nutrition planning, and mental health resources. Best suited as a mobile application for users to track health data on the go.",
    image: "/images/11.jpg",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 12,
    title: "E-learning Course Marketplace",
    description: " An online marketplace for e-learning courses, allowing instructors to create and sell courses. Suited for a web application to provide a seamless and feature-rich marketplace experience.",
    image: "/images/12.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Freelancer Hiring Platform",
    description: "A platform connecting freelancers with clients for project collaboration. Suited for a web application to offer a comprehensive platform for project posting, freelancer profiles, and payment processing.",
    image: "/images/13.jpg",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const modalTransition = { type: "spring", stiffness: 300, damping: 25 };

  return (
    <section
      id="projects"
      className="px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 bg-black bg-opacity-70 inset-0 z-0"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        Our Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onClick={() => handleProjectClick(project)}
            />
          </motion.li>
        ))}
      </ul>


        {isModalOpen && (
             <>
             <motion.div
               className="fixed top-0 left-0 right-0 bottom-0"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={closeModal}
             >
              <motion.div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ maxWidth: "80%" }}
              >
                <motion.div
                 className="relative bg-black p-8 rounded-md shadow-lg z-50 mb-32"
                 variants={modalVariants}
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 transition={modalTransition}
               >

                 {/* Modal content */}
                 <div className="flex flex-col items-center">
                   <img
                     src={selectedProject.image}
                     alt={selectedProject.title}
                     className="w-full h-auto rounded-md mb-4"
                   />
                   <h2 className="text-2xl font-bold mb-2">
                     {selectedProject.title}
                   </h2>
                   <p className="text-cyan-400 mb-4">
                     {selectedProject.description}
                   </p>
                 </div>
               </motion.div>
               
              </motion.div>
               
             </motion.div>   
           </>
        )}


    </section>
  );
};

export default ProjectSection;