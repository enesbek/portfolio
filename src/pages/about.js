import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import ProfilePicture from "../assets/profile.jpeg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>EnesBek | About Page</title>
        <meta name="description" content="about me" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Lorem ipsum dolar sit" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit qui magnam excepturi est, aliquid eius obcaecati ullam,
                ad iste id dolor ipsa aperiam, quibusdam hic voluptates velit
                nobis exercitationem facilis.{" "}
              </p>
              <p className="font-medium my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                optio magnam saepe, vero beatae repellendus error officiis quod,
                natus maxime quidem vel pariatur aperiam, ullam earum ipsa id
                asperiores cumque?
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-xl border-2 border-solid border-dark bg-light p-8">
              <Image
                src={ProfilePicture}
                alt="EnesBek"
                className="w-full h-auto rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Github projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-6xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  medium article
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
