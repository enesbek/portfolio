import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-4 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 md:bg-transparent md:dark:bg-transparent md:text-dark md:dark:text-light md:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.2 }}
        >
          Software
        </motion.div>
        <Skill name="HTML" x="-5vw" y="-7vw" />
        <Skill name="CSS" x="-15vw" y="-7vw" />
        <Skill name="JavaScript" x="12vw" y="2vw" />
        <Skill name="React.js" x="17vw" y="-6vw" />
        <Skill name="Vue.js" x="19vw" y="-15vw" />
        <Skill name="TypeScript" x="-7vw" y="-15vw" />
        <Skill name="Figma" x="-25vw" y="-12vw" />
        <Skill name="Next" x="-2vw" y="11vw" />
        <Skill name="Tailwind" x="-20vw" y="2vw" />
        <Skill name="NET" x="-15vw" y="17vw" />
        <Skill name="Java" x="11vw" y="18vw" />
        <Skill name="Go" x="25vw" y="13vw" />
        <Skill name="Node.js" x="33vw" y="-5vw" />
        <Skill name="Git" x="10vw" y="10vw" />
        <Skill name="Docker" x="-30vw" y="8vw" />
      </div>
    </>
  );
};
