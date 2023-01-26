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
          className="flex flex-col items-center  justify-center w-screen lg:w-full pt-20"
          id="contact"
        >
          <motion.div
            className="text-6xl font-bold text-center flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={animation}
          >
            <h2>Contact Me</h2>
            <p className="text-base pt-5 font-normal w-1/2">
                I&#39;m looking for opportunities to work as a developer, mainly as a Front end or Full Stack Engineer. <br /> If after seeing this portfolio you&#39;re interested in hiring me as a freelancer, intern or fulltime employee, you can contact me using either of the following (feel free to send me an email or text anytime, for any reason). Thanks for scrolling through my portfolio and taking your time to view some of my projects.
            </p>
            {/* <ContactCard /> */}
          </motion.div>
        </section>
  )
}