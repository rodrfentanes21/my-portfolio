import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      animation2.start({
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
        },
      });
    }
  }, [inView, animation, animation2]);
  return (
    <section
      ref={ref}
      className="flex flex-col items-center  justify-center w-screen lg:w-full pt-20"
      id="projects"
    >
      <motion.div
        className="text-6xl font-bold text-center"
        initial={{ x: "-100vw" }}
        animate={animation}
      >
        <h2>My Projects</h2>
        <p className="text-base pt-5 font-normal">
          Some personal and professional projects I made during my time as a
          developer.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animation2}
        className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 pt-20 pb-48 lg:pb-20"
      >
        <ProjectCard
          title="My Tenure at Sofex"
          language="React Native, Django, NestJS, NextJS"
          content="Even though i can't show the code, i would like to share my experience working at Sofex, a brazilian company that provides software solutions for the medical market, i worked there as a fullstack developer for about 1 year and a half, i learned a lot of things there, and i'm very grateful for the experience."
        />
        <ProjectCard
          title="Privilege Website"
          language="React"
          content="Responsive website developed for Privilege Construtora, a brazilian construction company, my first professional paid project, 
          (this is a private repository, so only link to the site will be available)."
          mainLink="https://privilege.vercel.app/"
        />
        <ProjectCard
          title="Link Dashboard"
          language="React"
          content="Responsive Dashboard made to visualize dynamic data from a firebase database, professional paid project that unfortunately i can't show the repository or the site, so i will be linking a collection of prints with dummy data"
          frontLink="https://imgur.com/a/M1KF9xP"
        />
        <ProjectCard
          title="Next.js Todo App"
          language="React"
          content="This is an unfinished project. My first experience using Next.js and Vercel, Good project to learn the fundamentals of react and some Next.js exclusive functionalities, also helped me get used to TailwindCSS"
          mainLink="https://nextjs-todo-six-pi.vercel.app/"
          gitHubLink="https://github.com/rodrfentanes21/nextjs-todo"
        />
        <ProjectCard
          title="Login System"
          language="Angular"
          content="FullStack Login page, made using Angular, Bootstrap, Node.js, Express, Mongoose and MongoDB. The project is divided in 2 repos (front and backend). This project was made as part of a selective process with a deadline of 2 days, which taking into consideration my lack of experience at the time, i consider a good result."
          frontLink="https://github.com/rodrfentanes21/cadastro_wevo"
          backLink="https://github.com/rodrfentanes21/backend_wevo"
        />
        <ProjectCard
          title="This Portfolio"
          language="React"
          content="Portfolio made using Next.js, Tailwind, Framer Motion, and a bit of pure CSS"
          gitHubLink="https://github.com/rodrfentanes21/my-portfolio"
        />
      </motion.div>
    </section>
  );
}
