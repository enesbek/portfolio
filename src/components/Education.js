import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      />
      <div>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-[105%] bg-dark origin-top  dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"Bachelor's Degree / Computer Engineering"}
            time={"09/2017 – 06/2022"}
            place={"Fatih Sultan Mehmet Vakif University"}
            info="Completed a graduation project like Trello and developed in a team of 2 people. •Worked on the frontend using Vue.js, while my teammate developed the backend with .NET.
            •Created a board structure similar to Trello and implemented various features."
          />
          <Details
            type={"Erasmus / Bachelor's Degree / Computer Science"}
            time={"09/2019 – 02/2020"}
            place={"University of Bielsko-Biala, Poland"}
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
