"use client"
import React, { useState } from "react";

const NavBar = ({ menus, onMenuClick }) => {
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index);
    onMenuClick(index);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-70 px-6 py-2 mb-5 z-50 max-w-md mx-auto border border-transparent rounded-full">
      <ul className="flex justify-center items-center relative">
        {menus.map((menu, index) => (
          <li key={index} className="mx-2 mt-5">
            <a
              className={`flex flex-col text-center cursor-pointer transition-opacity ${
                index === active ? "text-black" : "text-black"
              }`}
              onClick={() => handleMenuClick(index)}
            >
              <span className={`text-xl${index === active ? " text-cyan-400" : ""}`}>
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  index === active ? "opacity-100 duration-700" : "opacity-0"
                } text-xs`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
