import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light pt-6">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top  dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Frontend Developer"}
            company={"Doğuş Teknoloji"}
            companyLink={"https://www.d-teknoloji.com.tr/"}
            time="01/2023 – present"
            address="Istanbul, Turkey"
            work="Led and managed a development team, ensuring successful completion of projects through the utilization of Agile/Scrum methodologies and Azure DevOps for project management.
            •Developed and maintained complex web applications, including a Facebook and Google Ads API-powered advertising management application, using React, HTML, CSS, and JavaScript.
            •Implemented UI/UX designs with Figma, and conducted thorough testing, including unit and end-to-end testing, to ensure high-quality code.
            •Collaborated with cross-functional teams, including UX designers, backend developers, and project managers, to ensure seamless integration and delivery of features within deadlines.
            "
          />
          <Details
            position={"Frontend Developer Intern"}
            company={"Doğuş Teknoloji"}
            companyLink={"https://www.d-teknoloji.com.tr/"}
            time="05/2022 – 12/2022"
            address="Istanbul, Turkey"
            work="•Proficient in HTML, CSS, JavaScript, React, .Net, and PostgreSql web development. Experienced with React libraries, Hooks and Redux Toolkit and UI/Unit testing. •Skilled in Figma design, event planning, Agile and Scrum methodologies, team leadership, and effective communication in collaborative environments."
          />
          <Details
            position={"Full Stack Developer Intern"}
            company={"Modanisa"}
            companyLink={"https://www.modanisa.com/"}
            time="10/2021 – 03/2022"
            address="Istanbul, Turkey"
            work="Completed full-stack projects using Html, Css, JavaScript, Vue.js and Go as part of an internship program.
            •Proficient in writing acceptance tests, unit tests, and e2e tests.
            •Utilized Consumer Driven Contracts with Pactflow and CI/CD with CircleCI and Google Cloud Platform.
            •Followed a TDD approach during the development process."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
