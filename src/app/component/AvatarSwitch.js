import React from 'react';
import { motion } from 'framer-motion';

const AvatarSwitch = ({ onSelectAvatar }) => {
  const avatars = ["jameson.png", "junell.jpg"];

  const handleAvatarClick = (avatar) => {
    onSelectAvatar(avatar);
  };

  return (
    <motion.div
      className="fixed top-4 left-4 flex items-center z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex bg-black bg-opacity-50 p-2 rounded-full mb-2">
        {avatars.map((avatar) => (
          <motion.img
            key={avatar}
            src={`/images/${avatar}`}
            alt={`Avatar ${avatar}`}
            onClick={() => handleAvatarClick(avatar)}
            style={{ width: "32px", height: "32px", cursor: "pointer", margin: "4px", borderRadius: "50%" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AvatarSwitch;
