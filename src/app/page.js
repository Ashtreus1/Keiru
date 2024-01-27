"use client"
import Background from './Background'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import AboutSection from "./component/AboutSection";
import React, { useState } from "react";


const Home = () => {

  const [active, setActive] = useState(0);

  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", component: <HeroSection />},
    { name: "About", icon: "people-outline", dis: "translate-x-16", component: <AboutSection />},
    { name: "Projects", icon: "code-working-outline", dis: "translate-x-32" },
    { name: "Contacts", icon: "call-outline", dis: "translate-x-48" },
  ];

  const renderComponent = () => {
    switch (Menus[active].name) {
      case "Home":
        return <HeroSection />;
      case "About":
        return <AboutSection />;
      default:
        return null;
    }
  };

  return (
    <Background>
      <NavBar menus={Menus} onMenuClick={(index) => setActive(index)} />
      {renderComponent()}
      <Footer />
    </Background>
  );
};

export default Home;