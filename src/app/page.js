"use client";
import HeroSection from "./components/pages/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/pages/AboutSection";
import ProjectSection from "./components/pages/ProjectSection";
import EmailSection from "./components/pages/EmailSection";
import FooterSection from "./components/pages/FooterSection";
import AchievementsSection from "./components/pages/AchievementsSection";
import BackToTop from "./components/BackToTop";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mt-24 mx-auto px-4 py-4 ">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectSection
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <EmailSection />
        </div>
        <FooterSection />
      </div>
      {!selectedProject && <BackToTop />}
      <Toaster />
    </>
  );
}
