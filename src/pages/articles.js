import { AnimatedText } from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import articleImg from "../assets/article1.png";
import articleImg2 from "../assets/articleImg2.png";

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>EnesBek | Articles Page</title>
        <meta name="description" content="articles" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Lorem Ipsum Dolor" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Authorization with Metamask"
              summary="In this article, I will discuss the authorization method that should be used in decentralized applications (dApps) with MetaMask."
              time="2 min read"
              link="https://medium.com/p/fccd324e620c"
              img={articleImg}
            />
            <FeaturedArticle
              title="Test Article"
              summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis necessitatibus voluptates hic maxime nobis ea aut, voluptate, aspernatur ut sint asperiores ex dicta, optio ratione sequi corporis. Suscipit, sapiente maxime."
              time="10 min read"
              link="/"
              img={articleImg2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
