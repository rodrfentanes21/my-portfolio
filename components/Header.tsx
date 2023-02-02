import React, { useState } from "react";
import Link from "next/link";
import HamburgerDisplay from "./HamburgerDisplay";

export default function Header() {
  const [isNavMenu, setNavMenu] = useState(false);

  return (
    <header className="flex justify-between lg:justify-start h-16 items-center fixed w-screen lg:w-full bg-opacity-20 backdrop-blur-lg drop-shadow-sm z-20">
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
      <button className="lg:hidden pr-5" onClick={() => setNavMenu(!isNavMenu)}>
        <svg
          className="fill-white"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
            fill="#1040e2"
          />
          <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
        </svg>
      </button>
      <HamburgerDisplay trigger={isNavMenu} setTrigger={setNavMenu}/>
    </header>
  );
}