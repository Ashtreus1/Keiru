"use client"
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, previewUrl, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative h-full">
          <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="overlay 
          items-center 
          justify-center 
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          bg-[#181818] 
          bg-opacity-0 
          hidden group-hover:flex 
          group-hover:bg-opacity-80 
          transition-all duration-500 "
        >
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {isModalOpen && (
        <>
          {/* Surroundings with dim effect */}
          <div
            className="fixed top-0 left-0 right-0 bottom-0"
            onClick={closeModal}
          />

          <div className="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg brightness-110">
            <button className="absolute top-4 right-4 text-white" onClick={closeModal}>
            </button>
            <img src={imgUrl} alt={title} className="w-full h-auto" />
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
