"use client"
import React, { useState } from "react";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import ContactSection from "./component/ContactSection";

const Home = () => {
  const [activeContent, setActiveContent] = useState("Home");

  const renderContent = () => {
    switch (activeContent) {
      case "Home":
        return <HeroSection />;
      case "Abouts":
        return <AboutSection />;
      case "Projects":
        return <ProjectSection />;
      case "Contacts":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
            <div>
            {renderContent()}
            </div>
        </div>

        <NavBar setActiveContent={setActiveContent} />
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
