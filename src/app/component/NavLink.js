import React from "react";

const NavLink = ({ menu, isActive, onClick }) => {
  return (
    <li className="w-16 relative">
      <a
        className={`flex flex-col items-center justify-center text-center pt-6 ${menu.dis} ${
          isActive ? "-mt-6 text-white" : ""
        } transition-all duration-500`}
        onClick={onClick}
      >
        {isActive && (
          <span className={`bg-rose-600 ${menu.dis} border-4 border-black h-16 w-16 absolute -top-5 rounded-full transition-all duration-500 flex items-center justify-center`}>
            <span className="w-3.5 h-3.5 bg-transparent rounded-tr-[11px] shadow-myShadow1 transition-all duration-500"></span>
            <ion-icon name={menu.icon} className={`text-xl cursor-pointer ${isActive && "text-white"} transition-all duration-500`} />
            <span className="w-3.5 h-3.5 bg-transparent rounded-tl-[11px] shadow-myShadow2 transition-all duration-500"></span>
          </span>
        )}

        {!isActive && (
          <span className={`text-xl cursor-pointer ${isActive && "text-white"} transition-all duration-500`}>
            <ion-icon name={menu.icon}></ion-icon>
          </span>
        )}
      </a>
    </li>
  );
};

export default NavLink;
