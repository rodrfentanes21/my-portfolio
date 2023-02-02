import React from "react";

export default function HamburgerDisplay(props: any) {
  return props.trigger ? (
    <div className="z-50 w-full h-screen bg-black fixed top-0 left-0 flex flex-col align-middle items-center gap-6">
      <div className="w-[100%] z-50 mx-auto bg-transparent flex flex-row absolute top-0 justify-between lg:justify-center items-center align-middle py-5">
        <a href="/home" className=" select-none flex items-center pl-5">
          Rodrigo Fentanes
        </a>
        <button className="pr-5" onClick={() => props.setTrigger(false)}>
          <svg
            className="fill-white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}
