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
        <p className="text-base pt-5 font-normal">Clicking on the card leads to the domain (if there&apos;s any), otherwise it will lead to the github repository.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={animation2} className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 pt-20 pb-48 lg:pb-20'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </section>
  );
}
