import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      className="flex flex-col gap-5 justify-center items-center w-screen lg:w-full h-screen text-center lg:text-start"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <h1 className="text-6xl font-bold self-center text-center">
        Hi There, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#4e92f5] to-[#38bdf8]">Rodrigo Fentanes</span>
      </h1>
      <p>
        Computer Science Student and Full Stack Web Developer
      </p>
    </motion.section>
  );
}
