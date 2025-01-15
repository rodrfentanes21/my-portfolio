import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
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
      className="flex flex-col lg:flex-row gap-5 justify-around items-center w-screen lg:w-full h-screen text-center lg:text-start my-32 lg:my-0"
      id="about-me"
    >
      <div>
        <motion.h2
          className="text-6xl font-bold"
          initial={{ x: "-100vw" }}
          animate={animation}
        >
          About Me
        </motion.h2>
        <motion.p
          className="w-96 lg:w-[40vmax] text-sm lg:text-base"
          initial={{ opacity: 0 }}
          animate={animation2}
        >
          I am a 24-year-old software engineer and recent Computer Science
          graduate from PUC Minas Gerais. My programming journey began at 15
          when my father introduced me to SQL to assist with a task at his job.
          That small start sparked a passion that evolved into a professional
          career, built on a strong foundation in multiple programming languages
          and technologies.
          <br />
          Currently, I have over three years of experience in full-stack web and
          mobile development. At SOFEX, I led the development of a
          production-ready React Native application, enhancing user satisfaction
          through performance optimizations. I also contributed to backend
          modularity, cost reductions, and improved team productivity. As a
          freelance developer for LINK LTDA and Privilege Construtora, I honed
          my skills in designing scalable dashboards and implementing secure web
          solutions.
          <br />
          I deeply value collaboration in software engineering, as teamwork
          enriches problem-solving and fosters innovation. My self-taught
          beginnings, paired with academic achievements, have made me adaptable
          and resourceful, enabling me to quickly learn new tools and
          technologies.
          <br />
          Explore my portfolio to see the projects I&apos;ve worked on and my
          enthusiasm for innovative solutions. I am eager to take on new
          challenges and collaborate with other passionate developers.
        </motion.p>
      </div>
      <motion.a
        initial={{ opacity: 0 }}
        target="__blank"
        href="https://github.com/rodrfentanes21"
        animate={animation2}
        className=" bg-gradient-to-br from-[#6366f1] via-[#4e92f5] to-[#38bdf8] rounded-full w-72 lg:w-96 aspect-square grid place-items-center"
      >
        <Image
          src="/pfp_1.jpeg"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full w-[98%]"
        />
      </motion.a>
    </section>
  );
}
