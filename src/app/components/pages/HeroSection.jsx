"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 sm:py-12 md:py-24 xl:px-24 xl:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          /* initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} */
          className="col-span-8 place-self-center text-center md:text-left md:justify-self-start mb-4 md:mb-0"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">
            <span
              className="text-transparent bg-clip-text block"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                marginBottom: "1rem",
              }}
            >
              Hello World, I'm{" "}
            </span>
            <span className="text-white block">Alver Arevalo</span>
          </h1>

          <h2 className="py-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
                "Software Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              }}
            />
          </h2>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-0 sm:mr-4 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))",
              }}
            >
              Hire Me
            </Link>
            <button
              onClick={() => window.open("/CV_Manabat.pdf", "_blank")}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg mt-3 sm:mt-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))",
              }}
            >
              <span className="block rounded-full bg-[var(--color-dark-bg)]  px-5 py-2 cursor-pointer transition-colors duration-300">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          /* initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} */
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] relative"
            style={{ backgroundColor: "var(--color-card-bg)" }}
          >
            <Image
              src="/images/Hero-image2.png"
              alt="Hero Image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
              priority
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
