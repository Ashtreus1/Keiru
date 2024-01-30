import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AboutSection from "./AboutSection";

const SpotlightButton = ({ buttonClick }) => {

  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const get_started = <AboutSection/>

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const btnElement = btnRef.current;

    if (btnElement) {
      btnElement.addEventListener("mousemove", handleMouseMove);
      btnElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener("mousemove", handleMouseMove);
        btnElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const clickButton = () => {
    buttonClick()
  }

  return (
    <motion.button
      onClick={() => { clickButton(clickButton)}}
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full mt-5 max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Get Started
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;
