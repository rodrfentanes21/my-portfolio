import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

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
      className="flex flex-col items-center  justify-center w-screen lg:w-full h-screen"
      id="projects"
    >
      <motion.h2
        className="text-6xl font-bold"
        initial={{ x: "-100vw" }}
        animate={animation}
      >
        My Projects
      </motion.h2>

      <div>
        <motion.div initial={{ opacity: 0 }} animate={animation2}>
          {" "}
          sei la pai
        </motion.div>
      </div>
    </section>
  );
}
