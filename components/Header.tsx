import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-start h-16 items-center fixed w-screen lg:w-full bg-opacity-20 backdrop-blur-lg drop-shadow-sm z-10">
      <div className="ml-5">Rodrigo Fentanes</div>
      <nav className="grow flex justify-center gap-10">
        <Link href="#home" scroll={false}>
          Home
        </Link>
        <Link href="#about-me" scroll={false}>
          About Me
        </Link>
        <Link href="#projects" scroll={false}>
          My Projects
        </Link>
        <Link href="#home" scroll={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
