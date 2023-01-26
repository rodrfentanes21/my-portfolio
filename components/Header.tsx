import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-start h-16 items-center fixed w-screen lg:w-full bg-opacity-20 backdrop-blur-lg drop-shadow-sm z-20">
      <div className="ml-5">Rodrigo Fentanes</div>
      <nav className="grow hidden lg:flex justify-center gap-10">
        <Link href="#home" scroll={false} className='border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500  hover:text-indigo-500'>
          Home
        </Link>
        <Link href="#about-me" scroll={false} className='border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500  hover:text-indigo-500'>
          About Me
        </Link>
        <Link href="#projects" scroll={false} className='border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500  hover:text-indigo-500'>
          Projects
        </Link>
        <Link href="#contact" scroll={false} className='border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500  hover:text-indigo-500'>
          Contact
        </Link>
      </nav>
    </header>
  );
}
