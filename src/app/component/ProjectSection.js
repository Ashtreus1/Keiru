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
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Showcase your photography skills with a stunning portfolio website. Display your best shots, create galleries, and attract clients or followers with your visual storytelling.",
    image: "/images/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Powerful e-commerce platform for selling products online. Manage your inventory, process orders, and provide a seamless shopping experience to your customers.",
    image: "/images/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Satisfy your cravings with our food ordering application. Browse through a variety of cuisines, place your order, and enjoy delicious meals delivered to your doorstep.",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
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
        {/* Tags for filtering projects */}
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
        {/* Project cards with motion animation */}
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

      {isModalOpen && selectedProject && (
        <>
          {/* Dimmed Surroundings */}
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ maxWidth: "80%" }}
          >
            {/* Background for blur effect */}
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 ${
                isModalOpen ? 'bg-black bg-opacity-70 z-40' : 'brightness-110 '
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            />

            {/* Actual Modal */}
            <motion.div
              className="relative bg-white p-8 rounded-md shadow-lg z-50"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={modalTransition}
            >
              <button
                className="absolute top-4 right-4 text-gray-700"
                onClick={closeModal}
              >
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default ProjectSection;