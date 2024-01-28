import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <motion.button
      className={`text-base lg:text-lg px-4 py-2 rounded-full focus:outline-none ${
        active
          ? "text-cyan-400 border-b-2 border-cyan-400"
          : "text-white opacity-70 hover:opacity-100"
      }`}
      onClick={selectTab}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

export default TabButton;
