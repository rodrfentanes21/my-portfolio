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
          title="Privilege Website"
          language="React"
          content="Responsive website developed for Privilege Construtora, a brazilian construction company, my first professional paid project, 
          (since this is a professional project made for a third-party company, they may not want to have the code exposed publically, therefore the repository is private and will not be available here)."
          mainLink="https://privilege.vercel.app/"
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
          content="FullStack Login page, made using Angular, Bootstrap, Node.js, Express, Mongoose and MongoDB. This Project is divided in 2 repos (front and backend)"
          gitHubLink="https://github.com/rodrfentanes21/cadastro_wevo"
          gitHubLink2="https://github.com/rodrfentanes21/backend_wevo"
        />
        <ProjectCard
          title="Generic Landing Page"
          language="React"
          content="Generic T-Shirt Landing page, my first project using TailwindCSS, deployed with Firebase"
          mainLink="https://tailwindproductpage.web.app"
          gitHubLink="https://github.com/rodrfentanes21/tailwindproj"
        />
        <ProjectCard
          title="freeCodeCamp Projects"
          language="Vanilla HTML and CSS"
          content="Projects made in order to get the freeCodeCamp Responsive Web Design Certification."
          gitHubLink="https://github.com/rodrfentanes21/fccprojects"
        />
        <ProjectCard
          title="This Portfolio"
          language="React"
          content="Portfolio made using Next.js, Tailwind, Framer Motion, and a bit of pure CSS"
          gitHubLink="https://github.com/rodrfentanes21/fccprojects"
        />
      </motion.div>
    </section>
  );
}
