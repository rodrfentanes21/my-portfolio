import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

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
      className="flex flex-row gap-5 justify-around items-center w-screen lg:w-full h-screen"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          minima animi repellat deserunt cupiditate voluptatibus! Dolorem
          deserunt et provident repudiandae sed sint consectetur dignissimos
          ratione, ea ipsum, eaque maiores nisi?
        </motion.p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={animation2}>
        imagemzinha aqui pai
      </motion.div>
    </section>
  );
}
