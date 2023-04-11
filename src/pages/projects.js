import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import projectImg from "../assets/projectImg.jpeg";
import Image from "next/image";

const FeaturedPorjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_target"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-light rounded-lg bg-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_target"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-lg">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <div>
      <Head>
        <title>EnesBek | About Page</title>
        <meta name="description" content="about me" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Lorem Ipsum" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedPorjects
                title="Lorem Ipsum Dolor"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt possimus omnis itaque vitae cum delectus, est harum autem praesentium blanditiis ullam, mollitia impedit necessitatibus quas inventore eveniet fugiat. Aperiam, adipisci!"
                link="/"
                type="Featured Project"
                img={projectImg}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Lorem Ipsum Dolor"
                link="/"
                type="Featured Project"
                img={projectImg}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Lorem Ipsum Dolor"
                link="/"
                type="Featured Project"
                img={projectImg}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default projects;
