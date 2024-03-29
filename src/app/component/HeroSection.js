import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import SpotlightButton from './SpotlightButton';
import AboutSection from './AboutSection';
import Image from 'next/image';


const HeroSection = () => {
  const get_started = <AboutSection/>
  const [currentName, setCurrentName] = useState('Jameson');
  const [aboutClick, setAboutClick] = useState(get_started)
  const [buttonClick, setButtonClick] = useState(0)
  const controls = useAnimation();

  

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [currentName, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, scale: 0.5 }).then(() => {
        setCurrentName((prevName) => (prevName === 'Jameson' ? 'Junell' : 'Jameson'));
        controls.start({ opacity: 1, scale: 1 });
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [controls]);

  const handleNameChange = () => {
    useEffect( () => {
      controls.start({ opacity: 0, scale: 0.5 }).then(() => {
        setCurrentName((prevName) => (prevName === 'Jameson' ? 'Junell' : 'Jameson'));
        controls.start({ opacity: 1, scale: 1 });
      });
    })
  };

  const handleClick = (click) => {
    setAboutClick(click)
    setButtonClick(1)
  }

  return (
    <section className="lg:py-16 min-h-screen p-20">
      <div className="grid grid-cols sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, border: "1px solid cyan" }}
          className="col-span-8 place-self-center text-center mt-10 sm:text-left justify-self-start bg-black bg-opacity-70 p-10 rounded-md cursor-pointer"
        >
          <h1 className="text-white mb-4 text-6xl lg:text-6xl font-extrabold">
            <span className="text-white bg-clip-text">Hello, I&apos;m{' '}</span>
            <TypeAnimation
              sequence={[currentName, 3000, 'Junell', 4000]}
              wrapper="span"
              style={{ color: "cyan" }}
              speed={50}
              repeat={Infinity}
              onComplete={handleNameChange}
            />
          </h1>

          <p className="text-cyan text-4xl lg:text-2xl max-w-lg">
            We are passionate aspiring IT professionals in various fields, like
            full-stack development, graphic design, and many more. Explore our website to
            know us more. Let's collaborate on our works!
          </p>
          <div className="col-span-5"></div>
          <SpotlightButton buttonClick={() => {handleClick(aboutClick)}}/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center lg:mt-0"
        >
          <div className="rounded-full bg-[#303333] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-opacity-50">
            {currentName === 'Jameson' && (
              <Image
                src="/images/jameson.png"
                alt="Jameson's photo"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80"
                width={300}
                height={300}
              />
            )}
            {currentName === 'Junell' && (
              <Image
                src="/images/junell.jpeg"
                alt="Junell's photo"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full h-80"
                width={300}
                height={300}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
