"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectModal from "../ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Chatter",
    description:
      "Chatter is a full-stack real-time chat application designed for seamless and secure communication. It supports instant messaging, emoji integration, and live presence updates using Socket.IO. Built with modern web technologies, Chatter features responsive UI components, user authentication, and media handling, making it an ideal platform for both casual and team-based conversations.",
    shortDescription: "Real-Time Full-Stack Chat Application",
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "Vite", icon: "/images/icons/vite.svg" },
      { name: "Tailwind CSS", icon: "/images/icons/tailwindcss.svg" },
      { name: "Socket.IO", icon: "/images/icons/socketio.svg" },
      { name: "Node.js", icon: "/images/icons/nodejs.svg" },
      { name: "Express", icon: "/images/icons/express.svg" },
      { name: "MongoDB", icon: "/images/icons/mongodb.svg" },
      { name: "Cloudinary", icon: "/images/icons/cloudinary.svg" },
    ],
    image: "/images/projects/Chatter3.jpeg",
    tag: ["All", "Web"],
    images: [
      "Chatter1.jpeg",
      "Chatter2.jpeg",
      "Chatter3.jpeg",
      "Chatter4.jpeg",
      "Chatter5.jpeg",
      "Chatter6.jpeg",
      "Chatter7.jpeg",
      "Chatter8.jpeg",
    ],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 2,
    title: "Makeup by Alliah",
    description:
      "A personal portfolio website for Alliah showcasing her skills, projects, client feedback, and contact details. The site highlights her work and experience through a clean, responsive layout, providing visitors with an engaging overview of her creative and professional journey.",
    shortDescription: "Personal Portfolio & Project Showcase",
    technologies: [
      { name: "HTML", icon: "/images/icons/html.svg" },
      { name: "Tailwind CSS", icon: "/images/icons/tailwindcss.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
    ],
    image: "/images/projects/MakeupbyAlliah1.png",
    tag: ["All", "Web"],
    images: [
      "MakeupbyAlliah1.png",
      "MakeupbyAlliah2.png",
      "MakeupbyAlliah3.png",
      "MakeupbyAlliah4.png",
      "MakeupbyAlliah5.png",
    ],
    gitUrl: "https://github.com/alverarevalo30/makeupby.alliah",
    previewUrl: "https://alverarevalo30.github.io/makeupby.alliah/",
  },
  {
    id: 3,
    title: "Sanvicare Inventory Management System",
    description:
      "A mobile-based inventory monitoring system for Sanvicare Medical Supply Store, designed to track stock levels in real time and improve inventory accuracy. The app enables users to monitor items, receive low-stock alerts, and generate inventory reports, with built-in role-based access control for secure and efficient inventory management in healthcare settings.",
    shortDescription: "Mobile App for Real-Time Inventory Monitoring",
    technologies: [
      { name: "Android Studio", icon: "/images/icons/androidstudio.svg" },
      { name: "Kotlin", icon: "/images/icons/kotlin.svg" },
      { name: "XML", icon: "/images/icons/xml.svg" },
      { name: "Firebase", icon: "/images/icons/firebase.svg" },
    ],
    image: "/images/projects/SIMS2.png",
    tag: ["All", "Mobile"],
    images: [
      "SIMS1.png",
      "SIMS2.png",
      "SIMS3.png",
      "SIMS4.png",
      "SIMS5.png",
      "SIMS6.png",
      "SIMS7.png",
      "SIMS8.png",
      "SIMS9.png",
      "SIMS10.png",
      "SIMS11.png",
      "SIMS12.png",
      "SIMS13.png",
      "SIMS14.png",
      "SIMS15.png",
      "SIMS16.png",
      "SIMS17.png",
      "SIMS18.png",
      "SIMS19.png",
      "SIMS20.png",
      "SIMS21.png",
      "SIMS22.png",
      "SIMS23.png",
      "SIMS24.png",
      "SIMS25.png",
      "SIMS26.png",
      "SIMS27.png",
    ],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 4,
    title: "CMS Front-End",
    description:
      "A responsive content management system (CMS) front-end for the Power Supply Procurement and Governance Toolkit, designed to help ERC personnel manage content efficiently. The CMS provides a user-friendly interface for publishing and organizing information, supporting regulatory transparency and streamlined content updates.",
    shortDescription: "Responsive CMS for PSA Governance Toolkit",
    technologies: [
      { name: "React", icon: "/images/icons/react.svg" },
      { name: "TypeScript", icon: "/images/icons/typescript.svg" },
      { name: "Vite", icon: "/images/icons/vite.svg" },
      { name: "Tailwind CSS", icon: "/images/icons/tailwindcss.svg" },
      { name: "shadcn/ui", icon: "/images/icons/shadcn-ui.svg" },
    ],
    image: "/images/projects/CMS3.jpeg",
    tag: ["All", "Web"],
    images: [
      "CMS1.jpeg",
      "CMS2.jpeg",
      "CMS3.jpeg",
      "CMS4.png",
      "CMS5.png",
      "CMS6.png",
      "CMS7.png",
      "CMS8.jpeg",
      "CMS9.png",
      "CMS10.jpeg",
      "CMS11.png",
      "CMS12.png",
      "CMS13.jpeg",
      "CMS14.jpeg",
      "CMS15.png",
      "CMS16.png",
      "CMS17.png",
      "CMS18.jpeg",
      "CMS19.png",
      "CMS20.jpeg",
      "CMS21.jpeg",
      "CMS22.png",
    ],
    gitUrl: null,
    previewUrl: null,
  },
  /* {
    id: 5,
    title: "SeekUp!",
    description: "5",
    image: "/images/projects/SeekUp1.jpg",
    tag: ["All", "Web"],
    images: [
      "SeekUp1.jpg",
      "SeekUp2.jpg",
      "SeekUp3.jpg",
      "SeekUp4.jpg",
      "SeekUp5.jpg",
      "SeekUp6.jpg",
      "SeekUp7.jpg",
      "SeekUp8.jpg",
      "SeekUp9.jpg",
      "SeekUp10.jpg",
      "SeekUp11.jpg",
      "SeekUp12.jpg",
      "SeekUp13.jpg",
      "SeekUp14.jpg",
      "SeekUp15.jpg",
      "SeekUp16.jpg",
      "SeekUp17.jpg",
      "SeekUp18.jpg",
      "SeekUp19.jpg",
      "SeekUp20.jpg",
      "SeekUp21.jpg",
      "SeekUp22.jpg",
    ],
    gitUrl: "https://github.com/example",
    previewUrl: "https://example.com",
  }, */
  {
    id: 5,
    title: "Virtual BulSU",
    description:
      "Virtual Bulsu is an immersive virtual tour platform for Bulacan State University, featuring 360-degree campus views, interactive maps, voice narration, and real-time announcements. It offers an engaging and informative experience for students, visitors, and stakeholders.",
    shortDescription: "Interactive 360° Campus Tour",
    technologies: [
      { name: "HTML", icon: "/images/icons/html.svg" },
      { name: "CSS", icon: "/images/icons/css.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
      { name: "Bootstrap", icon: "/images/icons/bootstrap.svg" },
      { name: "PHP", icon: "/images/icons/php.svg" },
      { name: "MySQL", icon: "/images/icons/mysql.svg" },
    ],
    image: "/images/projects/VirtualBulsu1.png",
    tag: ["All", "Web"],
    images: [
      "VirtualBulsu1.png",
      "VirtualBulsu2.png",
      "VirtualBulsu3.png",
      "VirtualBulsu4.png",
      "VirtualBulsu5.png",
      "VirtualBulsu6.png",
      "VirtualBulsu7.png",
      "VirtualBulsu8.png",
      "VirtualBulsu9.png",
      "VirtualBulsu10.png",
      "VirtualBulsu11.png",
      "VirtualBulsu12.png",
      "VirtualBulsu13.png",
      "VirtualBulsu14.png",
      "VirtualBulsu15.png",
      "VirtualBulsu16.png",
      "VirtualBulsu17.jpg",
      "VirtualBulsu18.jpg",
      "VirtualBulsu19.jpg",
    ],
    gitUrl: null,
    previewUrl: "https://vbulsu.slarenasitsolutions.com/",
  },
  {
    id: 6,
    title: "Taskmeter",
    description:
      "TaskMeter is a work management platform that helps students organize tasks, track progress, and collaborate in groups using dashboards and progress indicators. It also enables professors to monitor student activity and access submitted outputs.",
    shortDescription: "Collaborative Task & Progress Tracker",
    technologies: [
      { name: "HTML", icon: "/images/icons/html.svg" },
      { name: "CSS", icon: "/images/icons/css.svg" },
      { name: "JavaScript", icon: "/images/icons/javascript.svg" },
      { name: "Bootstrap", icon: "/images/icons/bootstrap.svg" },
      { name: "PHP", icon: "/images/icons/php.svg" },
      { name: "MySQL", icon: "/images/icons/mysql.svg" },
    ],
    image: "/images/projects/TaskMeter4.jpg",
    tag: ["All", "Web"],
    images: [
      "TaskMeter1.jpg",
      "TaskMeter2.jpg",
      "TaskMeter3.jpg",
      "TaskMeter4.jpg",
      "TaskMeter5.jpg",
      "TaskMeter6.jpg",
      "TaskMeter7.jpg",
      "TaskMeter8.jpg",
    ],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 7,
    title: "AquaFlask Inventory Management System",
    description:
      "The AquaFlask Inventory Management System streamlines stock tracking and product management for staff, with features for updating quantities, adding items, and recording user actions for accountability. This system is for testing purposes only and does not intend to infringe on AquaFlask's copyrights",
    shortDescription: "Inventory Tracking & Product Management",
    image: "/images/projects/AquaFlask4.jpg",
    technologies: [
      { name: "Java", icon: "/images/icons/java.svg" },
      { name: "MySQL", icon: "/images/icons/mysql.svg" },
    ],
    tag: ["All", "Software"],
    images: [
      "AquaFlask1.jpg",
      "AquaFlask2.jpg",
      "AquaFlask3.jpg",
      "AquaFlask4.jpg",
      "AquaFlask5.jpg",
      "AquaFlask6.jpg",
    ],
    gitUrl: null,
    previewUrl: null,
  },
];

const ProjectSection = ({ selectedProject, setSelectedProject }) => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="flex flex-col px-4 py-8 sm:py-12 md:py-24 xl:px-24">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
            }}
          >
            My Projects
          </span>
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Software"
            isSelected={tag === "Software"}
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
              transition={{ duration: 0.3, delay: index * 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                shortDescription={project.shortDescription}
                imgUrl={project.image}
                tag={project.tag}
              />
            </motion.li>
          ))}
        </ul>

        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
