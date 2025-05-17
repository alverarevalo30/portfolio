"use client";
import Image from "next/image";
import React, { useState, useTransition, useRef } from "react";
import TabButton from "../TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-x-6 list-disc pl-4 space-y-2">
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/html.svg"
            alt="HTML Logo"
            width={16}
            height={16}
          />
          <span>HTML</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/css.svg"
            alt="CSS Logo"
            width={16}
            height={16}
          />
          <span>CSS</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/javascript.svg"
            alt="JavaScript Logo"
            width={16}
            height={16}
          />
          <span>JavaScript</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            width={16}
            height={16}
          />
          <span>Tailwind CSS</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/react.svg"
            alt="React Logo"
            width={16}
            height={16}
          />
          <span>React</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/express.svg"
            alt="Express Logo"
            width={16}
            height={16}
          />
          <span>Express</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/php.svg"
            alt="PHP Logo"
            width={16}
            height={16}
          />
          <span>PHP</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/java.svg"
            alt="Java Logo"
            width={16}
            height={16}
          />
          <span>Java</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/kotlin.svg"
            alt="Kotlin Logo"
            width={16}
            height={16}
          />
          <span>Kotlin</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/mysql.svg"
            alt="MySQL Logo"
            width={16}
            height={16}
          />
          <span>MySQL</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/mongodb.svg"
            alt="MongoDB Logo"
            width={16}
            height={16}
          />
          <span>MongoDB</span>
        </li>
        <li className="flex items-center space-x-2">
          <Image
            src="/images/icons/firebase.svg"
            alt="Firebase Logo"
            width={16}
            height={16}
          />
          <span>Firebase</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <b>Bulacan State University</b>, BS in Information Technology – Major
          in Web and Mobile Applications Development
          <br />
          <i>
            Guinhawa, Malolos, Bulacan · Graduated July 2024 ·{" "}
            <b>Magna Cum Laude</b>
          </i>
        </li>
        <li>
          <b>St. John the Baptist Catholic School</b>, Senior High School – STEM
          Strand
          <br />
          <i>
            Calumpit, Bulacan · Graduated April 2020 · <b>With Honors</b>
          </i>
        </li>
        <li>
          <b>St. John the Baptist Catholic School</b>, Junior High School
          <br />
          <i>
            Calumpit, Bulacan · Graduated April 2018 · <b>With Honors</b>
          </i>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        {/* <li>Angular – The Complete Guide (2024 Edition), Udemy</li> */}
        <li>Git Complete: The Definitive Step-by-Step Guide to Git, Udemy</li>
        <li>Learn Visual Studio Code (2020), Udemy</li>
        <li>The Complete 2024 Web Development Bootcamp, Udemy</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <b>Mobile Developer</b>
          <br />
          <i>
            Sanvicare Medical Supply – Baguio City, Benguet · Feb 2025 – Apr
            2025
          </i>
          <br />
          Developed a mobile inventory system using <b>Android Studio</b>,{" "}
          <b>Kotlin</b>, and <b>Firebase Database</b>.
        </li>
        <li>
          <b>Front-End Developer</b>
          <br />
          <i>
            EACOMM Corporation – Quezon City, Metro Manila · Aug 2024 – Feb 2025
          </i>
          <br />
          Built front-end web interfaces using <b>React</b> and related
          technologies for projects like the <b>CMS Front-end</b> and{" "}
          <b>PSA Toolkit Website</b>.
        </li>
        <li>
          <b>Work Immersion Internship</b>
          <br />
          <i>Accenture – Quezon City, Metro Manila · Jan 2024 – Apr 2024</i>
          <br />
          Gained experience with <b>VS Code</b>, <b>Git</b>, and web dev
          fundamentals; also completed{" "}
          <b>The Complete 2024 Web Development Bootcamp</b>.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const aboutSection = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="about" ref={ref}>
      <motion.div
        variants={aboutSection}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 py-8 sm:py-12 md:py-24  xl:px-24"
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] flex justify-center items-center">
            <Image
              src="/images/Section-image2.png"
              alt="Section Image"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        <div className="md:mt-0 text-left flex flex-col h-full mt-8 lg:mt-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              }}
            >
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            I'm a <b>front-end web developer</b> with a passion for building{" "}
            <b>clean</b>, <b>responsive</b>, and <b>user-friendly websites</b>.
            I graduated <b>Magna Cum Laude</b> with a degree in{" "}
            <b>Information Technology</b>, major in{" "}
            <b>Web and Mobile Applications Development</b>. While my main
            experience is in <b>front-end</b>, I'm currently{" "}
            <b>learning back-end development</b> to grow into a{" "}
            <b>full-stack role</b>. I'm excited to join a team where I can{" "}
            <b>keep learning</b>, <b>contribute</b>, and build{" "}
            <b>great digital experiences</b>.
          </p>

          {/* Dropdown for small screens */}
          <div className="block xs:hidden mt-8">
            <select
              value={tab}
              onChange={(e) => handleTabChange(e.target.value)}
              className="w-full p-2 bg-[var(--color-dark-bg)] border-2 border-[var(--color-card-bg)] text-white rounded-md"
            >
              {TAB_DATA.map((tabOption) => (
                <option key={tabOption.id} value={tabOption.id}>
                  {tabOption.title}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden xs:flex flex-row justify-start mt-8">
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
