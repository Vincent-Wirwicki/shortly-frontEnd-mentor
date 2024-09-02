"use client";
import useOnResize from "@/hooks/useOnResize";
import { Button } from "../ui/button";
import { useState } from "react";
import Modal from "../ui/Modal";

export default function Header() {
  const width = useOnResize();
  return (
    <header
      className="w-4/5 sm:w-11/12 absolute top-0 left-1/2 z-10 translate-x-[-50%] 
    py-5 sm:px-5 flex justify-between items-center "
    >
      {width <= 768 ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}

function DesktopNav() {
  const links = ["Features", "Pricing", "Ressources"];
  return (
    <>
      <nav className="flex justify-between items-baseline w-1/2">
        <h1 className="text-xl font-extrabold text-neutral-dark-violet">
          Shortly
        </h1>
        {links.map((link, i) => (
          <a
            key={`${link}-${i}`}
            className="text-xs text-third-gray hover:text-third-dark-violet cursor-pointer"
          >
            {link}
          </a>
        ))}
      </nav>
      <nav className="w-fit flex justify-between gap-5">
        <Button variant={"ghost"}>Login</Button>
        <Button className="bg-primary-cyan hover:bg-primary-cyan-light rounded-3xl">
          Sign Up
        </Button>
      </nav>
    </>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Features", "Pricing", "Ressources"];

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col items-center gap-4 ">
          <Button
            className="bg-primary-cyan hover:bg-primary-cyan-light"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
          <div className="flex flex-col items-center gap-4 text-neutral-50 border-y-2 border-third-gray p-5 w-full">
            {links.map((link, i) => (
              <a key={`${link}__${i}`}>{link}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <Button variant={"ghost"} className="text-neutral-50 w-full">
            Login
          </Button>
          <Button className="bg-primary-cyan hover:bg-primary-cyan-light rounded-3xl w-full">
            Sign Up
          </Button>
        </div>
      </Modal>
      <nav className="flex justify-between items-baseline w-full">
        <h1 className="text-xl font-extrabold ">Shortly</h1>
        <Button
          className="flex flex-col gap-4 bg-neutral-50"
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g className="fill-third-gray">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </Button>
      </nav>
    </>
  );
}
