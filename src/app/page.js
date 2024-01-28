"use client"
import Background from './Background'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import ProjectsSection from './component/ProjectSection'
import NavBar from './component/NavBar'
import AboutSection from "./component/AboutSection";
import AvatarSwitch from './component/AvatarSwitch'
import React, { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState("default");

  const menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", component: <HeroSection /> },
    { name: "Abouts", icon: "people-outline", dis: "translate-x-16", component: <AboutSection avatar={selectedAvatar} /> },
    { name: "Projects", icon: "code-working-outline", dis: "translate-x-32", component: <ProjectsSection /> },
    { name: "Contacts", icon: "call-outline", dis: "translate-x-48" },
  ];

  const renderComponent = () => {
    const selectedMenu = menus[active];
    return selectedMenu.component || null;
  };

  const handleAvatarSelection = (avatar) => {
    setSelectedAvatar(avatar);
    setActive(1);
  };

  const handleMenuClick = (index) => {
    if (index === 0) {
      setSelectedAvatar("default");
    }
    setActive(index);
  };

  return (
    <Background>
      <div className="h-screen overflow-y-auto">
        <AvatarSwitch onSelectAvatar={handleAvatarSelection} />
        <NavBar menus={menus} onMenuClick={handleMenuClick} />
        {renderComponent()}
        <Footer />
      </div>
    </Background>
  );
};

export default Home;
