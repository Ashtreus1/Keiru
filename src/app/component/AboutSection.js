"use client"
import Image from "next/image";
import TabButton from "./TabButton";
import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ShuffleGrid from "./ShuffleGrid";

const AboutSection = ({ avatar, onSelectAvatar }) => {
  const [tab, setTab] = useState("skills");
  const controls = useAnimation();
  const imageContainerRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
    controls.start({ opacity: 0, x: -30 });
    controls.start({ opacity: 1, x: 0 });
  };

  const handleImageLoad = () => {
    const divWidth = imageContainerRef.current.offsetWidth;
    const divHeight = imageContainerRef.current.offsetHeight;

    controls.start({
      opacity: 1,
      x: 0,
      width: divWidth,
      height: divHeight,
    });
  };

  let aboutContent = {}; 

  switch (avatar) {
    case 'jameson.png':
      aboutContent = {
        title: 'About Jameson',
        description: 'Meet Jameson, a passionate software engineer with aspirations to delve into the realm of data science. Armed with a curiosity for problem-solving and a knack for coding, Jameson is on a journey to create innovative solutions and gain insights from data. Here\'s a glimpse into his world:',
    
        skills: [
          { name : 'Full Stack Development', link: 'https://www.udemy.com/course/the-full-stack-web-development/?matchtype=b&msclkid=f98f52f4590812ed61e73743931e3fba&utm_campaign=BG-WebDevelopment_v.PROF_la.EN_cc.ROW_ti.8322&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=_._ag_1220458320108252_._ad__._kw_%2BWeb+%2BDevelopment+%2Bfull+%2Bstack+%2BCourse_._de_c_._dm__._pl__._ti_kwd-76278958132457_._li_153004_._pd__._'},
          { name : 'Data Structures and Algorithms', link : 'https://www.geeksforgeeks.org/data-structures-and-algorithms-online-courses-free-and-paid/'},
          { name: 'Machine Learning', link : 'https://www.bing.com/search?q=machine+learning+course+free&qs=n&form=QBRE&sp=-1&lq=0&pq=machine+learning+course+free&sc=10-28&sk=&cvid=8E5E643432844EE38D0AB551C20FFA70&ghsh=0&ghacc=0&ghpl='},
          { name : 'JavaScript (React, Node.js)', link : 'https://react.dev/'},
          { name : 'Python (NumPy, Pandas, Scikit-Learn)', link : 'https://www.freecodecamp.org/learn/machine-learning-with-python/'},
          { name : 'Database Management (MongoDB)', link : 'https://learn.mongodb.com/'},
          { name : 'Version Control (Git)', link : 'https://www.udemy.com/course/git-complete/?matchtype=p&msclkid=59a289c7e005190ff2abec702b6c0476&utm_campaign=BG-LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=_._ag_1223756854758415_._ad__._kw_%2BGit+%2BCourse_._de_c_._dm__._pl__._ti_kwd-76485115574987_._li_153004_._pd__._'},
          { name : 'UI/UX Design', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
          {name : 'Problem-solving'},
          { name :'Critical Thinking'}
        ],
        education: [
            { name : 'Cavite State University - Main'},
            { name : 'Youtube Courses'}, 
            { name : 'Online Documentation'},
            { name : 'FreeCodeCamp'},
            { name : 'The Odin Project'},
            { name : 'EDX Harvard CS50 Online Course'}
        ],
      };
      break;
    case 'junell.jpg':
      aboutContent = {
        title: 'About Junell',
            description: 'Meet Junell, an enthusiastic UI/UX and graphic designer who thrives on transforming ideas into visually stunning and user-friendly experiences. With a keen eye for aesthetics and a passion for creativity, Junell brings designs to life that captivate and engage. Here\'s a glimpse into his world:',

            skills: [
            { name : 'UI/UX Design', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
            { name : 'Graphic Design', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
            { name : 'Web Design', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
            { name : 'Mobile App Design', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
            { name : 'Prototyping (Figma, Adobe XD)', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'},
            { name : 'Branding', link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux'}
            ],
            education: [
              { name : 'Cavite State University - Main'},
              { name : 'Youtube Courses'},
              { name : 'Online Design Courses'},
              { name : 'Continuous Exploration of Design Trends'}
            ],
      };
      break;
    default:
      aboutContent = {
        title: 'Dive into Our World',
        description: `Welcome to our vibrant and creative space! We are a duo of
        innovative individuals with a shared passion for pushing boundaries
        and creating digital experiences that leave a lasting impact. Our
        journey in the world of technology is fueled by a relentless desire
        to learn, experiment, and collaborate`,

        skills: [
            { name : 'HTML & CSS', link : 'https://www.w3schools.com/html/html_css.asp'},
            { name :  'JavaScript', link : 'https://www.bing.com/ck/a?!&&p=0c3456e66fca367fJmltdHM9MTcwNjQ4NjQwMCZpZ3VpZD0zZWY1MTg5OC0xMDA0LTZlMTEtMTAyZC0wYjQzMTExMDZmOTEmaW5zaWQ9NTIxNw&ptn=3&ver=2&hsh=3&fclid=3ef51898-1004-6e11-102d-0b4311106f91&psq=javascript&u=a1aHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9qcy9ERUZBVUxULmFzcA&ntb=1'},
            { name : 'React', link : 'https://www.bing.com/ck/a?!&&p=edd06cde06fe20d6JmltdHM9MTcwNjQ4NjQwMCZpZ3VpZD0zZWY1MTg5OC0xMDA0LTZlMTEtMTAyZC0wYjQzMTExMDZmOTEmaW5zaWQ9NTIwMA&ptn=3&ver=2&hsh=3&fclid=3ef51898-1004-6e11-102d-0b4311106f91&psq=react&u=a1aHR0cHM6Ly9yZWFjdC5kZXYv&ntb=1'},
            { name : 'NodeJS', link : 'https://www.bing.com/ck/a?!&&p=64945d15b8f6e0ceJmltdHM9MTcwNjQ4NjQwMCZpZ3VpZD0zZWY1MTg5OC0xMDA0LTZlMTEtMTAyZC0wYjQzMTExMDZmOTEmaW5zaWQ9NTIwMg&ptn=3&ver=2&hsh=3&fclid=3ef51898-1004-6e11-102d-0b4311106f91&psq=nodejs&u=a1aHR0cHM6Ly9ub2RlanMub3JnLw&ntb=1'},
            { name : 'Figma', link : 'https://www.bing.com/ck/a?!&&p=97e60d514fbdc7d8JmltdHM9MTcwNjQ4NjQwMCZpZ3VpZD0zZWY1MTg5OC0xMDA0LTZlMTEtMTAyZC0wYjQzMTExMDZmOTEmaW5zaWQ9NTIwNA&ptn=3&ver=2&hsh=3&fclid=3ef51898-1004-6e11-102d-0b4311106f91&psq=figma&u=a1aHR0cHM6Ly93d3cuZmlnbWEuY29tLw&ntb=1'},
            { name : 'MongoDB', link : 'https://www.bing.com/ck/a?!&&p=37737527487126c0JmltdHM9MTcwNjQ4NjQwMCZpZ3VpZD0zZWY1MTg5OC0xMDA0LTZlMTEtMTAyZC0wYjQzMTExMDZmOTEmaW5zaWQ9NTIwOQ&ptn=3&ver=2&hsh=3&fclid=3ef51898-1004-6e11-102d-0b4311106f91&psq=mongodb&u=a1aHR0cHM6Ly93d3cubW9uZ29kYi5jb20v&ntb=1'},
            { name : 'UI/UX Design', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'Graphic Design', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'Web Design', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'Mobile App Design', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'Prototyping (Figma, Adobe XD)', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'Branding', link : 'https://www.bing.com/aclick?ld=e8c5Qzj_W5NJFxA3WyW0qpVDVUCUx5E719hxDNPoj7Sx0dvKmYbn5uIco9eejJ7IN6Hs4uUSLPdjgmZ5a0oAqWvXFH4ayB0ZwDut7wROVfs8qTQA36VM0XTA-76KIR7gr39y7C5Oqn7mO7J2i84SlPdbgnPjsuba75uQ6l5kA7T7sksRvNgSs64kc4P_Nzut6Q3RM0Hw&u=aHR0cHMlM2ElMmYlMmZ3d3cuY291cnNlcmEub3JnJTJmcHJvZmVzc2lvbmFsLWNlcnRpZmljYXRlcyUyZmdvb2dsZS11eC1kZXNpZ24lM2Z1dG1fc291cmNlJTNkYmclMjZ1dG1fbWVkaXVtJTNkc2VtJTI2dXRtX2NhbXBhaWduJTNkQjJDX0FQQUNfR29vZ2xlX0ZUQ09GX0dvb2dsZV9DZXJ0aWZpY2F0aW9uX0FSVEVfQklORyUyNnV0bV9jb250ZW50JTNkQjJDX0lORElBX19fRlRDT0ZfX2FydGVfYmluZ19icmFuZGVkJTI2Y2FtcGFpZ25pZCUzZDY2MjU2NDU3OSUyNmFkZ3JvdXBpZCUzZDEyNDM1NDg5NTk5Mjc1MDUlMjZkZXZpY2UlM2RjJTI2a2V5d29yZCUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNlJTI2bWF0Y2h0eXBlJTNkYiUyNm5ldHdvcmslM2RvJTI2ZGV2aWNlbW9kZWwlM2QlMjZhZHBvc3Rpb24lM2QlMjZjcmVhdGl2ZWlkJTNkJTI2aGlkZV9tb2JpbGVfcHJvbW8lMjZtc2Nsa2lkJTNkZjcxZDg4ZDViZjE3MWQ4ZDVhNjZlZDYyNzE4MDA0M2UlMjZ1dG1fdGVybSUzZGdvb2dsZSUyNTIwdXglMjUyMGRlc2lnbiUyNTIwY2VydGlmaWNhdGUlMjUyMHByaWNl&rlid=f71d88d5bf171d8d5a66ed627180043e&ntb=1'},
            { name : 'and many more...'}
          ],
          education: [
            { name : 'Cavite State University - Main'},
            { name : 'Youtube Courses'},
            { name : 'Online Courses / Documentation'},
            { name : 'Continuous Exploration of Design Trends'}
          ],
      };
      break;
}

  return (
    <section className="text-white relative overflow-hidden" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="bg-black bg-opacity-70 absolute inset-0 z-0"></div>
        <div
          ref={imageContainerRef}
          className="mt-4 md:mt-0 text-left flex flex-col h-full relative z-10"
        >
          <motion.h2
            className="text-4xl font-bold text-cyan-400 mb-4 pt-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutContent.title}
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {aboutContent.description}
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </motion.div>

          <motion.div
            className="mt-8 flex"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            >
          <div className="max-h-[600px] overflow-y-auto relative">
            <motion.div
              className="bg-cyan-600 p-4 rounded-md mb-4 hover:bg-cyan-700 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white font-semibold">Lists are clickable!</p>
            </motion.div>

            <motion.div
              className="bg-opacity-50 bg-cyan-600 p-10 rounded-md hover:bg-opacity-70 w-full transition"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ul className="list-disc pl-2 text-white">
                {Array.isArray(aboutContent[tab]) &&
                  aboutContent[tab].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05 }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
            
          </div>
              
            </motion.div>
        </div>
        
       

        { avatar !== 'default' ? (
            <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 30, width: 0, height: 0, objectFit: "cover"}}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div
              className="relative overflow-hidden rounded-md object-cover"
              style={{ width: 500, height: 500}}
            >
                  <Image
                      src={`/images/${avatar}`}
                      width={100}
                      height={100}
                      layout="responsive"
                      alt="About me Image"
                      onLoad={handleImageLoad}
                  />
              </div>
          </motion.div>
          ):(
            <ShuffleGrid />
          )}

        
      </div>
    </section>
  );
};

export default AboutSection;
