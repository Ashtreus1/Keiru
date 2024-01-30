import React, { useState, useEffect } from "react";
import { init, send } from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (emailSubmitted) {
      // Show the alert for 5 seconds
      setAlertMessage("Email sent successfully!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [emailSubmitted]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Initialize Email.js with your user ID
    init("nWoOE0tFKLaWfFUFB");

    // Replace "template_your_template_id" with your actual template ID
    send("service_u1num4f", "template_v8urk1t", {
      to_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setEmailSubmitted(true);
        e.target.reset(); // Reset the form after submission
      },
      (error) => {
        console.error("Error sending email:", error);
        setAlertMessage("Error sending email. Please try again.");
        setShowAlert(true);
      }
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      
      
      <div className="bg-opacity-70 bg-black fixed inset-0 z-0"></div>
      <motion.section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <motion.div
          className="z-10 bg-opacity-30 bg-gray-700 p-8 rounded-lg m-20 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-4 text-center"
            variants={itemVariants}
          >
            Reach Us!
          </motion.h2>
          <motion.div variants={itemVariants}>
            <h5 className="text-xl font-bold text-cyan-400 my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="github.com">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href="linkedin.com">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-opacity-30 bg-gray-700 p-8 rounded-lg m-5 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-400 mb-4 text-center"
            variants={itemVariants}
          >
            Email Us!
          </motion.h2>
          <motion.div variants={itemVariants}>
            {showAlert && (
              <motion.div
                className="fixed top-0 left-0 right-0 p-4 bg-green-500 text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {alertMessage}
              </motion.div>
            )}
              <form className="flex flex-col" onSubmit={sendEmail}>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="text-cyan-400 block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com"
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="text-cyan-400 block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hi"
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="text-cyan-400 block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ContactSection;
