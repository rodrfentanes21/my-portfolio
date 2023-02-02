import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import ContactCard from "./ContactCard";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 1,
          duration: 2,
        },
      });
    }
  }, [inView, animation]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center  justify-start w-screen lg:w-full h-screen"
      id="contact"
    >
      <motion.div
        className="text-6xl font-bold text-center flex flex-col justify-center items-center pt-40"
        initial={{ opacity: 0 }}
        animate={animation}
      >
        <h5>Contact Me</h5>
        <p className="text-sm lg:text-base pt-5 font-normal w-2/3">
          I&#39;m looking for opportunities to work as a developer, mainly as a
          Front end or Full Stack Engineer. <br /> 
          Thanks for scrolling through my portfolio and taking your time to view
          some of my projects.
        </p>
        <p className="text-sm lg:text-base pt-5 font-normal w-2/3">Click any of the cards below to contact me using the preferred method. (I&#39;ll try to answer ASAP).</p>
        <div className="pt-5 flex flex-col lg:flex-row justify-center items-center gap-5">
          <ContactCard title="Phone" link="tel:+55(31)98633-0533" svg="phone" aditional="+55 (31) 98633-0533"/>
          <ContactCard title="LinkedIn" link="https://www.linkedin.com/in/rodrfentanes/" svg="linkedin" aditional="Rodrigo Fentanes"/>
          <ContactCard title="Email" link="mailto:fentanesrodrigo@gmail.com" svg="email" aditional="fentanesrodrigo@gmail.com"/>
        </div>
      </motion.div>
    </section>
  );
}
