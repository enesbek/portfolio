import Link from "next/link";
import Logo from "@/components/Logo.js";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }  dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }  dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex flex-col justify-center items-center hidden lg:flex"
        onClick={handleHamburger}
      >
        <span
          className={`bg-dark dark:bg-light block trasition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block trasition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block trasition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              currentTheme === "light"
                ? "bg-light text-dark"
                : "bg-dark text-light"
            }`}
          >
            {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center flex-wrap mt-2">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mb-4"
              toggle={handleHamburger}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="mb-4"
              toggle={handleHamburger}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="mb-4"
              toggle={handleHamburger}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className="mb-4"
              toggle={handleHamburger}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark"
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 ml-3"
              whileTap={{ scale: 0.9 }}
            >
              {" "}
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className={`ml-6 flex items-center justify-center rounded-full p-1 ${
                currentTheme === "light"
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
              }`}
            >
              {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
