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
          className="w-96"
          initial={{ opacity: 0 }}
          animate={animation2}
        >
          22 years old, proactive and willing to face new challenges.
          Dedicated and extremely creative professional, always seeking to learn
          new technologies and improve both as an individual and as a
          professional, good at problem solving.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animation2}
        className=" bg-gradient-to-br from-[#6366f1] via-[#4e92f5] to-[#38bdf8] rounded-full w-72 lg:w-96 aspect-square grid place-items-center"
      >
        <div className=" rounded-full w-[98%] aspect-square grid place-items-center bg-black text-center">
          i don&#39;t have any good pictures that fit <br/> here but it was supposed to be a pfp
        </div>
      </motion.div>
    </section>
  );
}
