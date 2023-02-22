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
      className="flex flex-col lg:flex-row gap-5 justify-around items-center w-screen lg:w-full h-screen text-center lg:text-start"
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
          className="w-96 lg:w-[40vmax]"
          initial={{ opacity: 0 }}
          animate={animation2}
        >
          I am a 22-year-old software engineer currently on the 5th semester of
          my Computer Science Major. My first programming experience was at the
          age of 15, when, since I enjoyed a lot using the computer, my father
          asked for me to learn a little about SQL in order to help him with a
          new task he was having a hard time with at his job. Since then, I have
          expanded my knowledge and skills in various programming languages and
          technologies.
          <br />
          One thing I love about software engineering is the collaborative
          aspect. I am a strong believer in the importance of teamwork and I
          truly enjoy working in a team environment. I find that collaborating
          with others brings fresh perspectives, challenges my ideas, and
          ultimately leads to better outcomes. As a self-taught programmer, I
          believe I have developed strong problem-solving skills and have become
          a fast learner. Although my academic studies have been an essential
          part of my growth as a software engineer, I believe that my
          self-taught approach has given me the ability to be adaptable,
          innovative, and resourceful.
          <br />
          Please take a look at my portfolio to get a better idea of the
          projects I have worked on and the skills I have developed. I am always
          eager to take on new challenges and work on exciting projects with
          other passionate developers.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animation2}
        className=" bg-gradient-to-br from-[#6366f1] via-[#4e92f5] to-[#38bdf8] rounded-full w-72 lg:w-96 aspect-square grid place-items-center"
      >
        <div className=" rounded-full w-[98%] aspect-square grid place-items-center bg-black text-center">
          i don&#39;t have any good pictures that fit <br /> here but it was
          supposed to be a pfp here.
        </div>
      </motion.div>
    </section>
  );
}
